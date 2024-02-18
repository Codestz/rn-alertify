import { StyleSheet } from 'react-native';
import type { AlertTheme } from '../../types';

const alertIconLoadingStyles = (theme: AlertTheme) =>
  StyleSheet.create({
    iconCircle: {
      width: 40,
      height: 40,
      borderRadius: 20,
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    dividedAnimation: {
      borderRightColor: theme.colors[theme.mode].loadingIconColor,
      borderStartColor: theme.colors[theme.mode].loadingIconColor,
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent',
    },
    dividedAnimationWhite: {
      borderRightColor: '#fff',
      borderStartColor: '#fff',
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent',
    },
    normalAnimation: {
      borderStartColor: theme.colors[theme.mode].loadingIconColor,
      borderTopColor: theme.colors[theme.mode].loadingIconColor,
      borderBottomColor: theme.colors[theme.mode].loadingIconColor,
      borderEndColor: 'transparent',
    },
    normalAnimationWhite: {
      borderStartColor: '#fff',
      borderTopColor: '#fff',
      borderBottomColor: '#fff',
      borderEndColor: 'transparent',
    },
  });

export default alertIconLoadingStyles;
