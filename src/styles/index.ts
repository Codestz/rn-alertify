import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { UtilAdjustedFontSize } from '../utils';
import type { AlertTheme, AlertType } from '../types';

const { width } = Dimensions.get('window');

const alertStyles = ({
  theme,
  type,
}: {
  theme: AlertTheme;
  type: AlertType | 'success' | 'error' | 'info' | 'warning';
}) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      left: width * 0.05,
      right: 0,
      bottom: 0,
      top: 0,
      width: width * 0.9,
      height: 80,
      zIndex: 999,
      shadowColor: theme.colors[theme.mode].shadow.shadowColor,
      shadowOpacity: theme.colors[theme.mode].shadow.shadowOpacity,
      shadowOffset: theme.colors[theme.mode].shadow.shadowOffset,
      shadowRadius: theme.colors[theme.mode].shadow.shadowRadius,
      elevation: theme.colors[theme.mode].shadow.elevation,
      borderRadius: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors[theme.mode].backgroundColor,
    },
    containerByType: {
      backgroundColor: theme.colors[theme.mode][type],
    },
    shadowByType: {
      shadowColor: theme.colors[theme.mode][type],
    },
    containerNoIcon: {
      alignItems: 'flex-start',
    },
    indicatorBar: {
      borderRightWidth: 6,
    },
    indicatorBarLoading: {
      borderRightColor: 'gray',
    },
    barByType: {
      borderRightColor: theme.colors[theme.mode][type],
    },
    content: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
    },
    contentLeft: {
      flex: 0.75,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    contentRight: {
      flex: 0.2,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: UtilAdjustedFontSize(16),
      color: theme.colors[theme.mode].titleColor,
    },
    message: {
      fontSize: UtilAdjustedFontSize(14),
      fontWeight: 'normal',
      marginTop: 4,
      color: theme.colors[theme.mode].messageColor,
    },
    progressBar: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      height: 6,
      overflow: 'hidden',
      backgroundColor: theme.colors[theme.mode][type],
      borderBottomLeftRadius: 10,
    },
    progressBarLoading: {
      backgroundColor: '#fff',
    },
  });

export default alertStyles;
