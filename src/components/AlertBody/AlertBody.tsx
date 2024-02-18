import React from 'react';
import { View, Text } from 'react-native';
import alertStyles from '../../styles';
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
  messageProps,
}: AlertBodyProps) {
  const s = alertStyles({ theme, type });
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
        <Text numberOfLines={message ? 1 : 2} style={s.title}>
          {title}
        </Text>
        {message && (
          <Text
            {...(messageProps?.disableMultiLine && { numberOfLines: 1 })}
            {...(messageProps?.maxMessageLines && {
              numberOfLines: messageProps.maxMessageLines,
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
                theme={theme}
                type={type}
                trigger={isShowing}
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
