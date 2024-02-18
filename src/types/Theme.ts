export interface AlertThemeColors {
  backgroundColor: string;
  success: string;
  error: string;
  info: string;
  warning: string;
  titleColor: string;
  messageColor: string;
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
  fontSizes: {
    fontSizeTitle: number;
    fontSizeMessage: number;
    fontFamily: string;
  };
}

export enum AlertThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}
