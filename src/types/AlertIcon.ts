import { AlertType } from './Alert';

export interface AlertIconProps {
  trigger: boolean;
  type?: AlertType | 'success' | 'error' | 'warning' | 'info';
  forceWhite: boolean;
  styles: any;
}
