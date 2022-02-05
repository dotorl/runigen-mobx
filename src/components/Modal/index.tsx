import { CloseModalButton, CreateModal } from '@components/Modal/styled';
import React, { FC, ReactNode, useCallback } from 'react';

interface Props {
  show: boolean;
  children: ReactNode;
  onCloseModal: () => void;
}

//
// const Modal = ({ show, children, onCloseModal }: { show: boolean; children: ReactNode; onCloseModal: () => void }) => {
const Modal = ({ show, children, onCloseModal }: Props) => {
  // const Modal: FC<Props> = ({ show, children, onCloseModal }) => {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  if (!show) {
    return null;
  }
  return (
    <CreateModal onClick={onCloseModal}>
      <div onClick={stopPropagation}>
        <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>
        {children}
      </div>
    </CreateModal>
  );
};

export default Modal;
