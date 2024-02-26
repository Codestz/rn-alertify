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
  const defaultColorScheme = Appearance.getColorScheme();

  React.useEffect(() => {
    if (notConfigured) {
      setAlertTheme(DefaultTheme);
    } else {
      if (theme) {
        const parsedTheme: Pick<AlertTheme, 'colors' | 'fonts'> = {
          colors: {
            dark: {
              ...DefaultTheme.colors.dark,
              ...(theme.colors?.dark || {}),
              shadow: {
                ...DefaultTheme.colors.dark.shadow,
                ...(theme.colors?.dark?.shadow || {}),
                shadowOffset: {
                  ...DefaultTheme.colors.dark.shadow.shadowOffset,
                  ...(theme.colors?.dark?.shadow?.shadowOffset || {}),
                },
              },
            },
            light: {
              ...DefaultTheme.colors.light,
              ...(theme.colors?.light || {}),
              shadow: {
                ...DefaultTheme.colors.light.shadow,
                ...(theme.colors?.light?.shadow || {}),
                shadowOffset: {
                  ...DefaultTheme.colors.light.shadow.shadowOffset,
                  ...(theme.colors?.light?.shadow?.shadowOffset || {}),
                },
              },
            },
          },
          fonts: {
            ...DefaultTheme.fonts,
            ...theme.fonts,
            title: {
              ...DefaultTheme.fonts.title,
              ...(theme.fonts?.title || {}),
              color: {
                ...DefaultTheme.fonts.title.color,
                ...(theme.fonts?.title?.color || {}),
              },
            },
            message: {
              ...DefaultTheme.fonts.message,
              ...(theme.fonts?.message || {}),
              color: {
                ...DefaultTheme.fonts.message.color,
                ...(theme.fonts?.message?.color || {}),
              },
            },
          },
        };
        setAlertTheme({
          ...theme,
          ...parsedTheme,
          mode: useDeviceTheme
            ? defaultColorScheme === 'dark'
              ? 'dark'
              : 'light'
            : preferredAppearance === 'dark'
              ? 'dark'
              : 'light',
        });
        Appearance.addChangeListener(({ colorScheme }) => {
          if (useDeviceTheme) {
            setAlertTheme({
              ...theme,
              ...parsedTheme,
              mode: colorScheme === 'dark' ? 'dark' : 'light',
            });
          }
        });
      } else {
        setAlertTheme({
          ...DefaultTheme,
          mode: useDeviceTheme
            ? defaultColorScheme === 'dark'
              ? 'dark'
              : 'light'
            : preferredAppearance === 'dark'
              ? 'dark'
              : 'light',
        });
        Appearance.addChangeListener(({ colorScheme }) => {
          if (useDeviceTheme) {
            setAlertTheme({
              ...DefaultTheme,
              mode: colorScheme === 'dark' ? 'dark' : 'light',
            });
          }
        });
      }
    }
  }, [
    theme,
    useDeviceTheme,
    preferredAppearance,
    notConfigured,
    defaultColorScheme,
  ]);

  return { alertTheme };
}
