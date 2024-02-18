import { UtilAdjustedFontSize } from './util-adjusted-font-size';

export function UtilCalculateTextLines(
  text: string,
  width: number
): number | undefined {
  const textLength = text.length;
  const textWidth = UtilAdjustedFontSize(16) * textLength;
  const heightPerLine = UtilAdjustedFontSize(16);
  const numberOfLines = Math.ceil(textWidth / width);

  return numberOfLines > 1 ? numberOfLines * heightPerLine : undefined;
}
