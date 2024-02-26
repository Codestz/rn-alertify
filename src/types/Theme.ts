import type { TextStyle } from 'react-native';

export interface AlertThemeColors {
  backgroundColor: string;
  success: string;
  error: string;
  info: string;
  warning: string;
  shadow: AlertThemeShadow;
  loadingIconColor: string;
}

export interface AlertThemeShadow {
  shadowColor: string;
  shadowOpacity: number;
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowRadius: number;
  elevation: number;
}

export interface AlertTheme {
  mode: AlertThemeMode | 'light' | 'dark';
  colors: {
    light: AlertThemeColors;
    dark: AlertThemeColors;
  };
  fonts: {
    title: {
      fontSize: TextStyle['fontSize'];
      fontWeight: TextStyle['fontWeight'];
      color: {
        light: TextStyle['color'];
        dark: TextStyle['color'];
      };
    };
    message: {
      fontSize: TextStyle['fontSize'];
      fontWeight: TextStyle['fontWeight'];
      color: {
        light: TextStyle['color'];
        dark: TextStyle['color'];
      };
    };
    fontFamily: TextStyle['fontFamily'];
  };
}

export enum AlertThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}
