import React, { useCallback, useState } from 'react';
import Modal from '../components/Modal';

interface ModalContextProps {
  dialogRef: React.MutableRefObject<HTMLDialogElement | null>;
  isVisible: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const ModalContext = React.createContext<ModalContextProps>({
  dialogRef: { current: null },
  isVisible: false,
  onClose() {
    return null;
  },
  onOpen() {
    return null;
  },
});

export default function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const { dialogRef } = useModal();

  const onCloseModal = useCallback(() => {
    setIsVisible(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsVisible(true);
    dialogRef?.current?.showModal();
  }, [dialogRef]);

  return (
    <ModalContext.Provider
      value={{
        dialogRef: { current: null },
        isVisible,
        onClose: onCloseModal,
        onOpen: onOpenModal,
      }}
    >
      {children}
      <Modal dialogRef={dialogRef} />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = React.useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalContextProvider');
  }
  return context;
}
