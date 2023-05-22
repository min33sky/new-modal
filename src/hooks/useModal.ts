import React from 'react';
import { ModalContext } from '../contexts/modalContext';

export function useModal() {
  const context = React.useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalContextProvider');
  }
  return context;
}
