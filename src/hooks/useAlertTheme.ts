import React from 'react';
import { Appearance } from 'react-native';
import type { AlertProviderProps, AlertTheme } from '../types';
import { DefaultTheme } from '../theme';

export function useAlertTheme({
  theme,
  useDeviceTheme,
  preferredAppearance,
}: Omit<AlertProviderProps, 'children'>) {
  const [alertTheme, setAlertTheme] = React.useState<AlertTheme>(DefaultTheme);
  const notConfigured = !theme && !useDeviceTheme && !preferredAppearance;
  React.useEffect(() => {
    if (notConfigured) {
      setAlertTheme(DefaultTheme);
    } else {
      if (preferredAppearance && !useDeviceTheme && !theme) {
        setAlertTheme({
          ...DefaultTheme,
          mode: preferredAppearance,
        });
      }
      if (useDeviceTheme && !theme) {
        const colorScheme = Appearance.getColorScheme();
        setAlertTheme({
          ...DefaultTheme,
          mode: colorScheme === 'dark' ? 'dark' : 'light',
        });
        Appearance.addChangeListener(({ colorScheme }) => {
          setAlertTheme({
            ...DefaultTheme,
            mode: colorScheme === 'dark' ? 'dark' : 'light',
          });
        });
      }
      if (useDeviceTheme && theme) {
        const colorScheme = Appearance.getColorScheme();
        setAlertTheme({
          ...theme,
          mode: colorScheme === 'dark' ? 'dark' : 'light',
        });
        Appearance.addChangeListener(({ colorScheme }) => {
          setAlertTheme({
            ...theme,
            mode: colorScheme === 'dark' ? 'dark' : 'light',
          });
        });
      }
    }
  }, [theme, useDeviceTheme, preferredAppearance, notConfigured]);

  return { alertTheme };
}
