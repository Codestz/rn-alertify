import React from 'react';
import type { AlertTheme } from './Theme';

/**
 * Represents the properties of the alert message component.
 */
export interface AlertMessageProps {
  /**
   * Specifies if the message should be displayed as a single line.
   */
  disableMultiLine?: boolean;
  /**
   * Specifies the maximum number of lines to display for message.
   */
  maxMessageLines?: number;
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
   * A callback function to be called when the alert is pressed or interacted with.
   * @default null
   */
  onPress?: () => void;
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
   * Specifies the message properties of the alert.
   * @default undefined
   */
  messageProps?: AlertMessageProps;
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
   * Specifies the message properties of the alert.
   * @default undefined
   */
  messageProps?: AlertMessageProps;
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
