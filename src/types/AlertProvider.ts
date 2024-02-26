import type { DeepPartial } from '.';
import type { AlertCommonProps, AlertProps } from './Alert';
import type { AlertTheme } from './Theme';

export interface AlertContextProps {
  /**
   * Displays an alert with the specified properties.
   *
   * @remarks
   * Use this function to show an alert to the user with the provided title, message, type, duration, and indicator type.
   *
   * @param params - The properties of the alert to be displayed.
   *
   * @example
   * showAlert({ title: 'Error', message: 'An error occurred!', type: 'error', duration: 5000 });
   * @returns void
   */
  showAlert: (params: AlertProps) => void;
  /**
   * Use this function if you want to do something when the alert change is state to closed.
   *
   * This feature is on a early stage and could cause some issues.
   *
   * @example
   * onClose(() => {
   *   // Your code here
   * });
   * @returns void
   */
  onClose: (callback: () => void) => void;

  /**
   * Use this function if you want to do something when the alert change is state to open.
   *
   * This feature is on a early stage and could cause some issues.
   *
   * @example
   * onOpen(() => {
   *   // Your code here
   * });
   * @returns void
   */
  onOpen: (callback: () => void) => void;
  /**
   * Use this function when you want to trigger the loader.
   * @example
   * React.useEffect(() => {
   *  setLoader(isLoading);
   *  }, [isLoading]);
   */
  setLoader: (value: boolean) => void;
  /**
   * This value return the current state of the alert.
   */
  isShowing: boolean;
  /**
   * This value return the current state of the loader.
   */
  isLoading: boolean;
  /**
   * Use this function when you want to change the content of the alert, after some action.
   */
  changeContent: (params: AlertProps) => void;
  /**
   * This value return the current state of the theme.
   * */
  theme: AlertTheme;
}

export interface AlertProviderProps {
  /**
   * The children components to be wrapped by the AlertProvider.
   */
  children: React.ReactNode;
  /**
   * The theme to be used by the AlertProvider.
   * @default DefaultTheme
   */
  theme?: DeepPartial<AlertTheme>;
  /**
   * Property to set if the AlertProvider should take the theme from the mobile device.
   * @default false
   */
  useDeviceTheme?: boolean;
  /**
   * Property to set the preferred appearance of the AlertProvider.
   * @default 'light'
   */
  preferredAppearance?: 'light' | 'dark';
  /**
   * The common configuration to be used by the AlertProvider.
   *
   * This configuration will be used by all alerts, unless the alert has its own configuration.
   * @default {}
   */
  commonConfig?: AlertCommonProps;
}
