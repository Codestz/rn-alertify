import React, { useRef } from 'react';
import { Animated } from 'react-native';
import alertIconLoadingStyles from './AlertLoadingIcon.styles';
import type { AlertTheme } from '../../types';

export function AlertLoadingIcon({
  theme,
  animationMode,
  forceWhite,
}: {
  theme: AlertTheme;
  animationMode: 'normal' | 'divided';
  forceWhite?: boolean;
}) {
  const rotation = useRef(new Animated.Value(0)).current;
  const s = alertIconLoadingStyles(theme);

  React.useEffect(() => {
    const startAnimation = () => {
      Animated.loop(
        Animated.timing(rotation, {
          toValue: 1,
          duration: 1000, // Adjust the duration as per your preference
          useNativeDriver: true,
        })
      ).start();
    };

    startAnimation();

    return () => {
      rotation.setValue(0);
    };
  }, [rotation]);

  return (
    <Animated.View
      style={[
        s.iconCircle,
        animationMode === 'divided' && forceWhite && s.dividedAnimationWhite,
        animationMode === 'divided' && !forceWhite && s.dividedAnimation,
        animationMode === 'normal' && forceWhite && s.normalAnimationWhite,
        animationMode === 'normal' && !forceWhite && s.normalAnimation,
        {
          transform: [
            {
              rotate: rotation.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        },
      ]}
    />
  );
}

export default AlertLoadingIcon;
