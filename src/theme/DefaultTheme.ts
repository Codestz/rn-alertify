import { AlertThemeMode } from '../types';
import type { AlertTheme } from '../types';
import { UtilAdjustedFontSize } from '../utils';
import { DarkTheme } from './DarkTheme';
import { LightTheme } from './LightTheme';

export const DefaultTheme: AlertTheme = {
  mode: AlertThemeMode.LIGHT,
  colors: {
    light: LightTheme,
    dark: DarkTheme,
  },
  fonts: {
    title: {
      fontSize: UtilAdjustedFontSize(16),
      fontWeight: 'bold',
      color: {
        light: '#000',
        dark: '#fff',
      },
    },
    message: {
      fontSize: UtilAdjustedFontSize(14),
      fontWeight: 'normal',
      color: {
        light: '#000',
        dark: '#fff',
      },
    },
    fontFamily: 'Roboto',
  },
};
