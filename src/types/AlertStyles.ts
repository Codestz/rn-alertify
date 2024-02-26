import type { TextStyle, ViewStyle } from 'react-native';
import type { AlertTextStyle, AlertType } from './Alert';
import type { AlertTheme } from './Theme';

export interface AlertStyles {
  theme: AlertTheme;
  type?: AlertType | 'success' | 'error' | 'info' | 'warning';
  customStyles?: CustomizableAlertStyles;
}

export interface CustomizableAlertStyles {
  title?: Partial<
    Omit<AlertTextStyle, 'disableMultiLine' | 'maxLines' | 'color'>
  > & {
    color?: {
      light?: TextStyle['color'];
      dark?: TextStyle['color'];
    };
  };
  message?: Partial<
    Omit<AlertTextStyle, 'disableMultiLine' | 'maxLines' | 'color'>
  > & {
    color?: {
      light?: TextStyle['color'];
      dark?: TextStyle['color'];
    };
  };
  backgroundColor?: {
    light?: ViewStyle['backgroundColor'];
    dark?: ViewStyle['backgroundColor'];
  };
}
