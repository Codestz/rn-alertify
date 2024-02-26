import React, { useMemo } from 'react';
import { Animated, Dimensions, PanResponder, Pressable } from 'react-native';
import type { PanResponderGestureState } from 'react-native';
import MakeAlertStyles from '../../styles';
import { AlertIndicatorType } from '../../types';
import type { AlertComponentProps } from '../../types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AlertBody } from '../AlertBody/AlertBody';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function AlertComponent({
  isShowing,
  title,
  message,
  type = undefined,
  indicatorType = AlertIndicatorType.ICON,
  icon,
  showIndicator = true,
  onPress,
  theme,
  duration,
  handleHideAlert,
  stayOpen,
  shadowColorByType,
  showProgress,
  progressColor,
  isLoading,
  loadingAnimationMode = 'normal',
  swipeable = false,
  backgroundByType = false,
  hideAfterLoading = true,
  shadow,
  containerStyle,
  messageStyle,
  titleStyle,
}: AlertComponentProps) {
  const s = MakeAlertStyles({
    theme,
    type,
    customStyles: {
      title: {
        ...titleStyle,
        color: {
          [theme.mode === 'dark' ? 'light' : 'dark']:
            theme.fonts.title.color[theme.mode === 'dark' ? 'light' : 'dark'],
          [theme.mode]: titleStyle?.color,
        },
      },
      message: {
        ...messageStyle,
        color: {
          [theme.mode === 'dark' ? 'light' : 'dark']:
            theme.fonts.message.color[theme.mode === 'dark' ? 'light' : 'dark'],
          [theme.mode]: messageStyle?.color,
        },
      },
      backgroundColor:
        typeof containerStyle?.backgroundColor === 'string'
          ? {
              [theme.mode === 'dark' ? 'light' : 'dark']:
                theme.colors[theme.mode === 'dark' ? 'light' : 'dark']
                  .backgroundColor,
              [theme.mode]: containerStyle?.backgroundColor,
            }
          : containerStyle?.backgroundColor,
    },
  });
  const { top } = useSafeAreaInsets();
  const { width } = Dimensions.get('window');
  const [animation] = React.useState<{
    opacity: Animated.Value;
    translateY: Animated.Value;
    translateX: Animated.Value;
  }>({
    opacity: new Animated.Value(0),
    translateY: new Animated.Value(-70),
    translateX: new Animated.Value(0),
  });
  const [progressAnimation] = React.useState<{
    width: Animated.Value;
    barBorderRadius: Animated.Value;
  }>({
    width: new Animated.Value(width * 0.9),
    barBorderRadius: new Animated.Value(10),
  });

  const messageLines = useMemo(() => {
    const messageLength = message?.length;
    const parentWidth = width * s.contentLeft.flex;
    const baseHeight = containerStyle?.height || s.container.height;
    if (messageLength) {
      const fontSize = s.message.fontSize;
      const messageWidth = messageLength * (fontSize || 0);
      const lines = Math.ceil(messageWidth / parentWidth) - 1;
      if (messageStyle?.maxLines && lines > messageStyle.maxLines) {
        return baseHeight + messageStyle.maxLines * (fontSize || 0);
      }
      if (!messageStyle?.disableMultiLine) {
        return lines > 1
          ? baseHeight + lines * (fontSize || 0) - 4 * lines
          : baseHeight;
      }
    }

    return baseHeight;
  }, [
    message?.length,
    s.container.height,
    s.contentLeft.flex,
    s.message.fontSize,
    width,
    messageStyle?.disableMultiLine,
    messageStyle?.maxLines,
    containerStyle,
  ]);

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (_evt, _gestureState) => true,
      onStartShouldSetPanResponderCapture: (_evt, _gestureState) => true,
      onMoveShouldSetPanResponder: (_evt, gestureState) => {
        const { dx, dy } = gestureState;
        const dxDifference = Math.abs(dx) - Math.abs(dy);
        return dxDifference > 10;
      },
      onMoveShouldSetPanResponderCapture: (_evt, _gestureState) => true,
      onPanResponderMove: (
        _evt,
        gestureState: PanResponderGestureState & { dx: number; dy: number }
      ) => {
        animation.translateX.setValue(gestureState.dx);
      },
      onPanResponderRelease: (_evt, gestureState) => {
        if (Math.abs(gestureState.dx) > width * 0.225) {
          Animated.timing(animation.translateX, {
            toValue: gestureState.dx > 0 ? width : -width,
            duration: 300,
            useNativeDriver: true,
          }).start(() => {
            handleHideAlert();
          });
        } else {
          Animated.spring(animation.translateX, {
            toValue: 0,
            speed: 10,
            bounciness: 5,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  React.useEffect(() => {
    if (isShowing) {
      progressAnimation.barBorderRadius.setValue(0);
      if (!isLoading) {
        Animated.timing(progressAnimation.width, {
          toValue: 0,
          delay: 300,
          duration: duration,
          useNativeDriver: false,
        }).start();
      }
      Animated.parallel([
        Animated.timing(animation.opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.spring(animation.translateY, {
          toValue: top,
          speed: 10,
          bounciness: 5,
          useNativeDriver: true,
        }),
      ]).start(({ finished }) => {
        if (finished && !stayOpen && !isLoading && hideAfterLoading) {
          setTimeout(handleHideAlert, (duration || 0) - 1000);
        }
      });
    } else {
      Animated.parallel([
        Animated.timing(animation.opacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(animation.translateY, {
          toValue: -messageLines,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(({ finished }) => {
        if (finished) {
          progressAnimation.width.setValue(width * 0.9);
          animation.translateX.setValue(0);
        }
      });
    }
  }, [
    isShowing,
    isLoading,
    duration,
    progressAnimation.barBorderRadius,
    progressAnimation.width,
    animation.opacity,
    animation.translateY,
    animation.translateX,
    top,
    stayOpen,
    hideAfterLoading,
    handleHideAlert,
    width,
    messageLines,
  ]);

  return (
    <AnimatedPressable
      onPress={onPress}
      style={[
        s.container,
        backgroundByType && !isLoading && type && s.containerByType,
        shadowColorByType && !shadow?.shadowColor && s.shadowByType,
        indicatorType === AlertIndicatorType.BAR &&
          showIndicator &&
          !backgroundByType &&
          s.indicatorBar,
        indicatorType === AlertIndicatorType.BAR &&
          showIndicator &&
          isLoading &&
          s.indicatorBarLoading,
        indicatorType === AlertIndicatorType.BAR &&
          !backgroundByType &&
          s.barByType,
        !showIndicator && s.containerNoIcon,
        {
          ...(!isShowing && { shadowOpacity: 0 }),
          transform: [
            { translateY: animation.translateY },
            { translateX: animation.translateX },
          ],
        },
        {
          height: messageLines,
          ...shadow,
        },
      ]}
    >
      {showProgress && !stayOpen && !isLoading && (
        <Animated.View
          style={[
            s.progressBar,
            backgroundByType && s.progressBarLoading,
            {
              width: progressAnimation.width,
              borderBottomRightRadius: progressAnimation.barBorderRadius,
              ...(progressColor && { backgroundColor: progressColor }),
            },
          ]}
        />
      )}
      <AlertBody
        styles={s}
        backgroundByType={backgroundByType}
        indicatorType={indicatorType}
        isLoading={isLoading}
        isShowing={isShowing}
        loadingAnimationMode={loadingAnimationMode}
        panResponder={panResponder}
        showIndicator={showIndicator}
        swipeable={swipeable}
        theme={theme}
        title={title}
        type={type}
        icon={icon}
        message={message}
        messageStyle={{
          disableMultiLine: messageStyle?.disableMultiLine,
          maxLines: messageStyle?.maxLines,
        }}
        titleStyle={{
          disableMultiLine: titleStyle?.disableMultiLine,
          maxLines: titleStyle?.maxLines,
        }}
      />
    </AnimatedPressable>
  );
}
