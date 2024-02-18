import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { AlertType } from '../../types';
import type { AlertIconProps } from '../../types';
import alertIconStyles from './AlerIcon.styles';
export function AlertIcon({
  trigger,
  type,
  theme,
  forceWhite,
}: AlertIconProps) {
  const circleAnimation = useRef(new Animated.Value(0)).current;
  const checkAnimation = useRef(new Animated.Value(0)).current;
  const s = alertIconStyles({ theme, type });

  const startAnimation = React.useMemo(() => {
    const handleAnimation = () => {
      if (trigger) {
        Animated.timing(circleAnimation, {
          toValue: 1,
          duration: 300,
          easing: Easing.linear,
          useNativeDriver: false,
        }).start();
        Animated.timing(checkAnimation, {
          toValue: 1,
          duration: 350,
          easing: Easing.linear,
          useNativeDriver: false,
        }).start();
      } else {
        circleAnimation.setValue(0);
        checkAnimation.setValue(0);
      }
    };

    return handleAnimation;
  }, [trigger, circleAnimation, checkAnimation]);

  const circleScale = circleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const checkOpacity = checkAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const checkScale = checkAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0.6, 1],
  });

  useEffect(() => {
    startAnimation();
  }, [trigger, startAnimation]);

  return (
    <Animated.View
      style={[
        s.iconCircle,
        forceWhite && s.forceWhite,
        {
          transform: [{ scale: circleScale }],
        },
      ]}
    >
      <Animated.Text
        style={[
          s.iconContent,
          forceWhite && s.forceWhite,
          {
            opacity: checkOpacity,
            transform: [{ scale: checkScale }],
          },
        ]}
      >
        {type === AlertType.SUCCESS && '✓'}
        {type === AlertType.ERROR && '✕'}
        {type === AlertType.WARNING && '!'}
        {type === AlertType.INFO && 'i'}
      </Animated.Text>
    </Animated.View>
  );
}

export default AlertIcon;
