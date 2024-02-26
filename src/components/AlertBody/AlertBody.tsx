import React from 'react';
import { View, Text } from 'react-native';
import { AlertIndicatorType } from '../../types';
import type { AlertBodyProps } from '../../types/AlertBody';
import AlertIcon from '../AlertIcon/AlertIcon';
import AlertLoadingIcon from '../AlertLoadingIcon/AlertLoadingIcon';

export function AlertBody({
  theme,
  type,
  swipeable,
  message,
  title,
  panResponder,
  backgroundByType,
  isLoading,
  showIndicator,
  indicatorType,
  isShowing,
  loadingAnimationMode,
  icon,
  messageStyle,
  titleStyle,
  styles: s,
}: AlertBodyProps) {
  const { disableMultiLine: disableTitleMultiline, maxLines: maxTitleLines } =
    titleStyle || {};
  const {
    disableMultiLine: disableMessageMultiline,
    maxLines: maxMessageLines,
  } = messageStyle || {};

  return (
    <View
      {...(swipeable && !isLoading && panResponder.panHandlers)}
      style={s.content}
    >
      <View
        style={{
          ...s.contentLeft,
          ...(!showIndicator && !icon && { flex: 1 }),
        }}
      >
        <Text
          {...(disableTitleMultiline && { numberOfLines: 1 })}
          {...(maxTitleLines && {
            numberOfLines: maxTitleLines,
          })}
          numberOfLines={message ? 1 : 2}
          style={s.title}
        >
          {title}
        </Text>
        {message && (
          <Text
            {...(disableMessageMultiline && { numberOfLines: 1 })}
            {...(maxMessageLines && {
              numberOfLines: maxMessageLines,
            })}
            style={s.message}
          >
            {message}
          </Text>
        )}
      </View>
      <View style={s.contentRight}>
        {!isLoading ? (
          showIndicator && !icon ? (
            indicatorType === AlertIndicatorType.ICON && (
              <AlertIcon
                forceWhite={backgroundByType}
                type={type}
                trigger={isShowing}
                styles={s}
              />
            )
          ) : (
            icon
          )
        ) : (
          <AlertLoadingIcon
            animationMode={loadingAnimationMode}
            theme={theme}
            forceWhite={backgroundByType}
          />
        )}
      </View>
    </View>
  );
}
