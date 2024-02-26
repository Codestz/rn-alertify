import { useAlertContext } from './context';
import { AlertProvider } from './provider';
import { DefaultTheme, DarkTheme, LightTheme } from './theme';
import { UtilAdjustedFontSize } from './utils';
import type {
  AlertTheme,
  AlertProps,
  AlertType,
  AlertIndicatorType,
  AlertCommonProps,
} from './types';

export {
  AlertProvider,
  useAlertContext,
  DefaultTheme,
  DarkTheme,
  LightTheme,
  UtilAdjustedFontSize,
};
export type {
  AlertTheme,
  AlertProps,
  AlertType,
  AlertIndicatorType,
  AlertCommonProps,
};
