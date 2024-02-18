import { AlertType } from './Alert';
import type { AlertTheme } from './Theme';

export interface AlertIconProps {
  trigger: boolean;
  type: AlertType | 'success' | 'error' | 'warning' | 'info';
  theme: AlertTheme;
  forceWhite: boolean;
}
