import React from 'react';
import { AlertContext } from '../provider';

export const useAlertContext = () => {
  const context = React.useContext(AlertContext);
  if (context === undefined) {
    throw new Error('useAlertContext must be used within a AlertProvider');
  }
  return context;
};
