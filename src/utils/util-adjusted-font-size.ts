import { PixelRatio, Dimensions } from 'react-native';

export function UtilAdjustedFontSize(fontSize: number): number {
  const { width } = Dimensions.get('window');
  const responsiveFontSize = (width / 360) * fontSize;
  return PixelRatio.getFontScale() * responsiveFontSize;
}
