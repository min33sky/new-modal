import React, { useCallback, useRef, useState } from 'react';
import Modal from '../components/Modal';

interface ModalContextProps {
  isVisible: boolean;
  onCloseModal: () => void;
  onOpenModal: () => void;
}

const ModalContext = React.createContext<ModalContextProps>({
  isVisible: false,
  onCloseModal: () => null,
  onOpenModal: () => null,
});

export default function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const onCloseModal = useCallback(() => {
    setIsVisible(false);
    dialogRef.current?.close();
  }, [dialogRef]);

  const onOpenModal = useCallback(() => {
    setIsVisible(true);
    dialogRef?.current?.showModal();
  }, [dialogRef]);

  return (
    <ModalContext.Provider
      value={{
        isVisible,
        onCloseModal,
        onOpenModal,
      }}
    >
      {children}
      <Modal ref={dialogRef} closeModal={onCloseModal} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = React.useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalContextProvider');
  }
  return context;
}
