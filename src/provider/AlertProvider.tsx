import React from 'react';
import { AlertComponent } from '../components';
import type {
  AlertContextProps,
  AlertProps,
  AlertProviderProps,
} from '../types';
import { useAlertTheme } from '../hooks';

export const AlertContext = React.createContext<AlertContextProps | undefined>(
  undefined
);
export const AlertProvider = ({
  children,
  theme,
  useDeviceTheme,
  preferredAppearance,
  commonConfig,
}: AlertProviderProps) => {
  const [contentWasChanged, setContentWasChanged] =
    React.useState<boolean>(false);
  const [isShowing, setIsShowing] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { alertTheme } = useAlertTheme({
    theme,
    useDeviceTheme,
    preferredAppearance,
  });
  const [alertProps, setAlertProps] = React.useState<AlertProps>({
    duration: 3000,
    title: '',
    message: '',
  });

  const showAlert = (params: AlertProps) => {
    if (isShowing) return;
    setIsShowing(true);
    setAlertProps({
      ...commonConfig,
      ...params,
      onPress: () => {
        params.onPress && params.onPress();
        if (!params.onPress && params.dismissible) {
          setIsShowing(false);
        }
      },
      type: params.type || undefined,
      titleStyle: {
        ...params.titleStyle,
        disableMultiLine:
          params.titleStyle?.disableMultiLine ||
          commonConfig?.titleStyle?.disableMultiLine,
        maxLines:
          params.titleStyle?.maxLines || commonConfig?.titleStyle?.maxLines,
      },
      messageStyle: {
        ...params.messageStyle,
        disableMultiLine:
          params.messageStyle?.disableMultiLine ||
          commonConfig?.messageStyle?.disableMultiLine,
        maxLines:
          params.messageStyle?.maxLines || commonConfig?.messageStyle?.maxLines,
      },
      containerStyle: {
        ...params.containerStyle,
      },
      hideAfterLoading: params.hideAfterLoading || true,
      duration: params.duration || commonConfig?.duration || 3000,
    });
  };

  const changeContent = (params: AlertProps) => {
    setContentWasChanged(true);
    const hideAfterLoading = alertProps.hideAfterLoading;
    setAlertProps({
      ...params,
      ...commonConfig,
      onPress: () => {
        params.onPress && params.onPress();
        if (!params.onPress && params.dismissible) {
          setIsShowing(false);
        }
      },
      hideAfterLoading: hideAfterLoading,
      duration: commonConfig?.duration || params.duration || 3000,
    });
  };

  const onClose = React.useCallback(
    (callback: () => void) => {
      if (typeof callback === 'function' && !isShowing) {
        callback();
      }
    },
    [isShowing]
  );

  const onOpen = React.useCallback(
    (callback: () => void) => {
      if (typeof callback === 'function' && isShowing) {
        callback();
      }
    },
    [isShowing]
  );

  const setLoader = (loading: boolean) => {
    setIsLoading(loading);
  };

  const handleHideAlert = () => {
    setIsShowing(false);
    setIsLoading(false);
    setContentWasChanged(false);
  };

  React.useEffect(() => {
    if (!isLoading && !contentWasChanged) {
      handleHideAlert();
    }
  }, [contentWasChanged, isLoading]);

  return (
    <AlertContext.Provider
      value={{
        theme: alertTheme,
        showAlert,
        onOpen,
        onClose,
        isShowing,
        setLoader,
        isLoading,
        changeContent,
      }}
    >
      <AlertComponent
        {...alertProps}
        isLoading={isLoading}
        isShowing={isShowing}
        theme={alertTheme}
        handleHideAlert={handleHideAlert}
      />
      {children}
    </AlertContext.Provider>
  );
};
