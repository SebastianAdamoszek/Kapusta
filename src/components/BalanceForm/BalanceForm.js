import React from 'react';
import { useSelector } from 'react-redux';
import {
  Form,
  Title,
  Input,
  Label,
  InputContainer,
  WrapperForm,
} from './BalanceForm.styled';

const BalanceForm = () => {
  // Pobranie wartości balansu z magazynu Redux
  // const balance = useSelector(state => state.auth.balance);
  const balance = useSelector(state => state.balance.balance);
  console.log('wartosc balance', balance);

  return (
    <WrapperForm>
      <Title>Balance:</Title>
      <Form>
        <InputContainer>
          <Input type="number" value={balance} disabled />
          <Label>usd</Label>
        </InputContainer>
      </Form>
    </WrapperForm>
  );
};

export default BalanceForm;

// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';

// import ModalBalance from '../../components/ModalStartBalance/ModalStartBalance';
// import { Confirm } from 'components/ModalLogOutAndConfirm/ModalLogOutAndConfirm';
// import {
//   Form,
//   Title,
//   Input,
//   Button,
//   Label,
//   InputContainer,
//   WrapperForm,
// } from './BalanceForm.styled';

// const BalanceForm = () => {
//   const [modalOpen, setModalOpen] = useState(false);

//   const balanceQuery = useSelector(state => state.auth.balance);

//   const [balance, setBalance] = useState('');

//   const handleModalOpen = e => {
//     e.preventDefault();
//     setModalOpen(true);
//   };
//   const handleModalClose = () => {
//     setModalOpen(false);
//   };

//   useEffect(() => {
//     if (balanceQuery !== undefined) {
//       setBalance(balanceQuery);
//     }
//   }, [balanceQuery]);

//   const handleChange = e => {
//     if (!Number.isNaN(e.target.value)) {
//       return setBalance(parseFloat(e.target.value));
//     }
//   };

//   return (
//     <>
//       <WrapperForm>
//         <Title>Balance:</Title>
//         <Form>
//           <InputContainer>
//             <Input
//               type="number"
//               id="balance"
//               placeholder="00.00"
//               value={balance}
//               onChange={handleChange}
//             />
//             <Label>usd</Label>
//           </InputContainer>
//           <Button type="submit" onClick={handleModalOpen}>
//             CONFIRM
//           </Button>
//            {balance === 0 && <ModalBalance />}
//           {modalOpen && (
//             <Confirm closeModal={handleModalClose}>Are you sure?</Confirm>
//           )}
//         </Form>
//       </WrapperForm>
//     </>
//   );
// };

// export default BalanceForm;
