import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import {
  Backdrop,
  ModalContent,
  Title,
  ButtonsBox,
  CloseButton,
  Modal,
} from './ModalLogOutAndConfirm.styled';
import close from '../../icons/close.svg';
import { OrangeButton } from './../Buttons/OrangeButton';
import { WhiteButton } from './../Buttons/WhiteButton';

const modalRoot = document.getElementById('modal-root');
const body = document.querySelector('body');

export const Confirm = ({
  children,
  closeModal,
  dispatch,
  changeBalance,
  text,
}) => {
  const handleBackdropClose = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscapeClose = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscapeClose);

    return () => {
      window.removeEventListener('keydown', handleEscapeClose);
      body.classList.toggle('no-scroll');
    };
  }, [closeModal]);

  return createPortal(
    <Backdrop className="modal-backdrop" onClick={handleBackdropClose}>
      <Modal>
        <CloseButton onClick={closeModal}>
          <img src={close} alt="close" />
        </CloseButton>
        <ModalContent>
          <Title>{children}</Title>
          <ButtonsBox>
            <OrangeButton
              dispatch={dispatch}
              closeModal={closeModal}
              changeBalance={changeBalance}
              onClick={() => dispatch()}
            >
              {text ? text : 'YES'}
            </OrangeButton>
            <WhiteButton closeModal={closeModal}>NO</WhiteButton>
          </ButtonsBox>
        </ModalContent>
      </Modal>
    </Backdrop>,
    modalRoot
  );
};

Confirm.propTypes = {
  children: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  changeBalance: PropTypes.func,
  text: PropTypes.string,
};
// import { useEffect } from 'react';
// import { createPortal } from 'react-dom';

// import {
//   Backdrop,
//   ModalContent,
//   Title,
//   ButtonsBox,
//   CloseButton,
//   Modal,
// } from './ModalLogOutAndConfirm.styled';
// import close from '../../icons/close.svg';
// import { OrangeButton } from './../Buttons/OrangeButton';
// import { WhiteButton } from './../Buttons/WhiteButton';

// const modalRoot = document.getElementById('modal-root');
// const body = document.querySelector('body');

// export const Confirm = ({
//   children,
//   closeModal,
//   dispatch,
//   changeBalance,
//   text,
// }) => {
//   const handleEscapeClose = event => {
//     if (event.code === 'Escape') {
//       closeModal();
//     }
//   };
//   const handleBackdropClose = event => {
//     if (event.target === event.currentTarget) {
//       closeModal();
//     }
//   };
//   useEffect(() => {
//     window.addEventListener('keydown', handleEscapeClose);

//     return () => {
//       window.removeEventListener('keydown', handleEscapeClose);
//       body.classList.toggle('no-scroll');
//     };
//   });

//   return createPortal(
//     <Backdrop className="modal-backdrop" onClick={handleBackdropClose}>
//       <Modal>
//         <CloseButton onClick={closeModal}>
//           <img src={close} alt="close" />
//         </CloseButton>
//         <ModalContent>
//           <Title>{children}</Title>
//           <ButtonsBox>
//             <OrangeButton
//               dispatch={dispatch}
//               closeModal={closeModal}
//               changeBalance={changeBalance}
//               onClick={() => dispatch()}
//             >
//               {text ? text : 'YES'}
//             </OrangeButton>
//             <WhiteButton closeModal={closeModal}>NO</WhiteButton>
//           </ButtonsBox>
//         </ModalContent>
//       </Modal>
//     </Backdrop>,
//     modalRoot
//   );
// };
