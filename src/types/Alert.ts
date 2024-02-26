import React from 'react';
import type { AlertTheme, AlertThemeShadow } from './Theme';
import type { TextStyle, ViewStyle } from 'react-native';

export interface AlertContainerStyle {
  /**
   * Specifies the base height of the alert container.
   *
   * Note: This height will be used as the base height of the alert container, and the height of the alert will be adjusted based on the content.
   *
   * @default 80
   **/
  height: number;
  /**
   * Specifies the background color of the alert container.
   *
   * Note: If you specify the background color as an string, the alert will change only the background color for the current theme mode.
   *
   * @default { light: 'white', dark: 'black' }
   **/
  backgroundColor:
    | string
    | {
        light?: ViewStyle['backgroundColor'];
        dark?: ViewStyle['backgroundColor'];
      };
}

export interface AlertTextStyle {
  /**
   * Specifies the font size of the alert title.
   *
   * Note: I recomended to use UtilAdjustedFontSize to adjust the font size based on the screen size.
   *
   * @default 16
   **/
  fontSize: TextStyle['fontSize'];
  /**
   * Specifies the font weight of the alert title.
   *
   * @default 'bold'
   **/
  fontWeight: TextStyle['fontWeight'];
  /**
   * Specifies the color of the alert title.
   * Note: This will override the color of the alert type.
   * @default {light: 'black', dark: 'white'}
   **/
  color:
    | TextStyle['color']
    | {
        light: TextStyle['color'];
        dark: TextStyle['color'];
      };
  /**
   * Specifies if the message should be displayed as a single line.
   */
  disableMultiLine?: boolean;
  /**
   * Specifies the maximum number of lines to display for message.
   */
  maxLines?: number;
}

/**
 * Represents the properties of the component to be displayed.
 */
export interface AlertProps {
  /**
   * The title of the alert.
   */
  title: string;

  /**
   * The message content of the alert.
   */
  message?: string;

  /**
   * The type of the alert, such as success, error, info, or warning.
   * @default 'success'
   */
  type?: AlertType | 'success' | 'error' | 'info' | 'warning';
  /**
   * The duration (in milliseconds) for which the alert will be displayed.
   * @default 3000ms
   */
  duration?: number;

  /**
   * The type of indicator to display with the alert, such as an icon or a bar.
   * @default 'icon'
   */
  indicatorType?: AlertIndicatorType | 'icon' | 'bar';

  /**
   * The custom icon component or element to display with the alert.
   * @default null
   */
  icon?: React.ReactNode;

  /**
   * Specifies whether to display the indicator (icon or bar) with the alert.
   * @default true
   */
  showIndicator?: boolean;
  /**
   *  Specifies if the alert should stay open until the user closes it.
   *
   *  @default false
   */
  stayOpen?: boolean;
  /**
   * Specifies if the alert should hide when pressed.
   * @default false
   */
  dismissible?: boolean;
  /**
   * Specifies if the shadow color should be the same as the alert type color.
   * @default false
   */
  shadowColorByType?: boolean;
  /**
   * Specifies if the alert should show a progress bar.
   * @default false
   */
  showProgress?: boolean;
  /**
   * Specifies the color of the progress bar.
   * @default takes the color of the alert type
   */
  progressColor?: string;
  /**
   * Specifies the animation mode of the loading indicator.
   * @default 'normal'
   */
  loadingAnimationMode?: 'normal' | 'divided';
  /**
   * Specifies if the alert should be swipable to dismiss.
   * @default false
   */
  swipeable?: boolean;
  /**
   * Specifies if the alert background should be the same as the alert type color.
   * @default false
   */
  backgroundByType?: boolean;
  /**
   * Specifies if the alert should hide after loading.
   * @default false
   */
  hideAfterLoading?: boolean;
  /**
   * Specifies the shadow properties of the alert.
   * @default undefined
   * */
  shadow?: Partial<AlertThemeShadow>;
  /**
   * Specifies the style of the alert container.
   **/
  containerStyle?: Partial<AlertContainerStyle>;
  /**
   * Specifies the style of the alert title.
   **/
  titleStyle?: Partial<AlertTextStyle>;
  /**
   * Specifies the style of the alert message.
   **/
  messageStyle?: Partial<AlertTextStyle>;
  /**
   * A callback function to be called when the alert is pressed or interacted with.
   * @default null
   */
  onPress?: () => void;
}

export interface AlertCommonProps {
  /**
   * The duration (in milliseconds) for which the alert will be displayed.
   * @default 3000ms
   */
  duration?: number;
  /**
   * Specifies whether to display the indicator (icon or bar) with the alert.
   * @default true
   */
  showIndicator?: boolean;
  /**
   * Specifies if the alert should hide when pressed.
   * @default false
   */
  dismissible?: boolean;
  /**
   * Specifies if the shadow color should be the same as the alert type color.
   * @default false
   */
  shadowColorByType?: boolean;
  /**
   * Specifies the animation mode of the loading indicator.
   * @default 'normal'
   */
  loadingAnimationMode?: 'normal' | 'divided';
  /**
   * Specifies if the alert should be swipable to dismiss.
   */
  swipeable?: boolean;
  /**
   * Specifies if the alert background should be the same as the alert type color.
   * @default false
   */
  backgroundByType?: boolean;
  /**
   * Specifies if the alert should hide after loading.
   * @default false
   */
  hideAfterLoading?: boolean;
  /**
   * Specifies the style of the alert container.
   * */
  titleStyle?: Partial<Pick<AlertTextStyle, 'disableMultiLine' | 'maxLines'>>;
  /**
   * Specifies the style of the alert message.
   **/
  messageStyle?: Partial<Pick<AlertTextStyle, 'disableMultiLine' | 'maxLines'>>;
}

export interface AlertComponentProps extends AlertProps {
  isShowing: boolean;
  theme: AlertTheme;
  handleHideAlert: () => void;
  isLoading?: boolean;
}

export enum AlertType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}

export enum AlertIndicatorType {
  ICON = 'icon',
  BAR = 'bar',
}
