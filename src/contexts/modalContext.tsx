import React, { useCallback, useRef, useState } from 'react';
import Modal from '../components/Modal';

interface ModalContextProps {
  isOpen: boolean;
  onCloseModal: () => void;
  onOpenModal: () => void;
}

export const ModalContext = React.createContext<ModalContextProps>({
  isOpen: false,
  onCloseModal: () => null,
  onOpenModal: () => null,
});

export default function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const onCloseModal = useCallback(() => {
    setIsOpen(false);
    dialogRef.current?.close();
  }, []);

  const onOpenModal = useCallback(() => {
    setIsOpen(true);
    dialogRef?.current?.showModal();
  }, []);

  return (
    <ModalContext.Provider
      value={{
        isOpen: isOpen,
        onCloseModal,
        onOpenModal,
      }}
    >
      {children}
      <Modal ref={dialogRef} />
    </ModalContext.Provider>
  );
}
