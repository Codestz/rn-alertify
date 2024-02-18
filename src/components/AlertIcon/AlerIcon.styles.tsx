import { StyleSheet } from 'react-native';
import { UtilAdjustedFontSize } from '../../utils';
import type { AlertTheme, AlertType } from '../../types';

const alertIconStyles = ({
  theme,
  type,
}: {
  theme: AlertTheme;
  type: AlertType | 'success' | 'warning' | 'error' | 'info';
}) =>
  StyleSheet.create({
    iconCircle: {
      width: 40,
      height: 40,
      borderRadius: 20,
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: theme.colors[theme.mode][type],
    },
    forceWhite: {
      borderColor: theme.mode === 'dark' ? '#fff' : '#000',
      color: theme.mode === 'dark' ? '#fff' : '#000',
    },
    iconContent: {
      color: theme.colors[theme.mode][type],
      fontSize: UtilAdjustedFontSize(18),
      fontWeight: 'bold',
    },
  });

export default alertIconStyles;
