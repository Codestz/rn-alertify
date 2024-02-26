import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import type { AlertStyles } from '../types';
import { UtilAdjustedFontSize } from '../utils';

const { width } = Dimensions.get('window');

const MakeAlertStyles = ({ theme, type, customStyles }: AlertStyles) =>
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
      backgroundColor:
        customStyles?.backgroundColor?.[theme.mode] ||
        theme.colors[theme.mode].backgroundColor,
    },
    containerByType: {
      ...(type && { backgroundColor: theme.colors[theme.mode][type] }),
    },
    shadowByType: {
      ...(type && { shadowColor: theme.colors[theme.mode][type] }),
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
      ...(type && { borderRightColor: theme.colors[theme.mode][type] }),
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
      fontWeight:
        customStyles?.message?.fontWeight || theme.fonts.title.fontWeight,
      fontSize: customStyles?.title?.fontSize || theme.fonts.title.fontSize,
      color:
        customStyles?.title?.color?.[theme.mode] ||
        theme?.fonts?.title?.color?.[theme.mode],
    },
    message: {
      fontSize: customStyles?.message?.fontSize || theme.fonts.message.fontSize,
      fontWeight:
        customStyles?.message?.fontWeight || theme.fonts.message.fontWeight,
      marginTop: 4,
      color:
        customStyles?.message?.color?.[theme.mode] ||
        theme?.fonts?.message?.color?.[theme.mode],
    },
    progressBar: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      height: 6,
      overflow: 'hidden',
      borderBottomLeftRadius: 10,
      ...(type && { backgroundColor: theme.colors[theme.mode][type] }),
    },
    progressBarLoading: {
      backgroundColor: '#fff',
    },
    iconCircle: {
      width: 40,
      height: 40,
      borderRadius: 20,
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      ...(type && { borderColor: theme.colors[theme.mode][type] }),
    },
    forceWhite: {
      borderColor: theme.mode === 'dark' ? '#fff' : '#000',
      color: theme.mode === 'dark' ? '#fff' : '#000',
    },
    iconContent: {
      ...(type && { color: theme.colors[theme.mode][type] }),
      fontSize: UtilAdjustedFontSize(18),
      fontWeight: 'bold',
    },
  });

export default MakeAlertStyles;
