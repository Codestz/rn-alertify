import type { PanResponderInstance } from 'react-native';
import type { AlertIndicatorType, AlertTextStyle, AlertType } from './Alert';
import type { AlertTheme } from './Theme';

export interface AlertBodyProps {
  swipeable: boolean;
  isLoading?: boolean;
  title: string;
  message?: string;
  theme: AlertTheme;
  type?: AlertType | 'success' | 'error' | 'info' | 'warning';
  panResponder: PanResponderInstance;
  backgroundByType: boolean;
  showIndicator: boolean;
  indicatorType?: AlertIndicatorType | 'icon' | 'bar';
  isShowing: boolean;
  loadingAnimationMode: 'normal' | 'divided';
  icon?: React.ReactNode;
  messageStyle?: Partial<Pick<AlertTextStyle, 'disableMultiLine' | 'maxLines'>>;
  titleStyle?: Partial<Pick<AlertTextStyle, 'disableMultiLine' | 'maxLines'>>;
  styles: any;
}
