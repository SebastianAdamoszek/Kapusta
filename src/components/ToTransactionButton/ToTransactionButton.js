import { useState } from 'react';
import Modal from 'react-modal';
import { ReactComponent as Logo } from '../../icons/back.svg';
import { ReactComponent as Logo2 } from '../../icons/back.svg';
import {
  ToTransactionBtn,
  Text,
  Logo2Wrapper,
} from './ToTransactionButton.styled';
import MobileTransactionForm from './MobileTransactionForm/MobileTransactionForm';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    backgroundColor: '#ffffff',
    zIndex: 15,
  },
  content: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: 'none',
    borderRadius: '0 0 0 100px',
    padding: 0,
    backgroundColor: '#F5F6FB',
    backgroundSize: '100% 314px',
    maxHeight: '440px',
  },
};

export const ToTransactionButton = () => {
  const [showMobileWindow, setShowMobileWindow] = useState(false);

  const openModal = () => {
    setShowMobileWindow(true);
  };

  const closeModal = () => {
    setShowMobileWindow(false);
  };

  return (
    <>
      <ToTransactionBtn onClick={openModal}>
        <Logo />
        <Text>TO TRANSACTION</Text>
      </ToTransactionBtn>
      <Modal
        isOpen={showMobileWindow}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Mobile Window"
      >
        <Logo2Wrapper>
          <Logo2 onClick={closeModal} />
        </Logo2Wrapper>
        <MobileTransactionForm />
      </Modal>
    </>
  );
};
