import type { AlertThemeColors } from '../types';

export const LightTheme: AlertThemeColors = {
  backgroundColor: '#FFFFFF',
  info: '#007AFF',
  error: '#FF3B30',
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  success: '#4CD964',
  warning: '#FFCC00',
  loadingIconColor: '#b4b4b4',
};
