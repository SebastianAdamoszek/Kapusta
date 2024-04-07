import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { updateUserBalance } from '../../redux/Transactions/apiTransactions';
import { updateBalance } from '../../redux/Auth/operations';
import ModalBalance from '../../components/ModalStartBalance/ModalStartBalance';
import { Confirm } from 'components/ModalLogOutAndConfirm/ModalLogOutAndConfirm';
import {
  Form,
  Title,
  Input,
  Button,
  Label,
  InputContainer,
  WrapperForm,
} from './BalanceForm.styled';

const BalanceForm = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();
  const balanceQuery = useSelector(state => state.auth.balance);

  const [balance, setBalance] = useState('');

  const handleModalOpen = e => {
    e.preventDefault();
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    return setBalance(balanceQuery);
  }, [balanceQuery]);

  const handleChange = e => {
    if (!Number.isNaN(e.target.value)) {
      return setBalance(parseFloat(e.target.value));
    }
  };

  const handleClick = e => {
    // e.preventDefault();
    if (balance !== '') {
      dispatch(updateBalance(balance));
    }
  };
  return (
    <>
      <WrapperForm>
        <Title htmlFor="balance">Balance:</Title>
        <Form>
          <InputContainer>
            <Input
              type="number"
              id="balance"
              placeholder="00.00"
              value={balance}
              onChange={handleChange}
            />
            <Label>USD</Label>
          </InputContainer>
          <Button type="submit" onClick={handleModalOpen}>
            CONFIRM
          </Button>
          {balance === 0 && <ModalBalance />}
          {modalOpen && (
            <Confirm closeModal={handleModalClose} dispatch={handleClick}>
              Are you sure?
            </Confirm>
          )}
        </Form>
      </WrapperForm>
    </>
  );
};

export default BalanceForm;
