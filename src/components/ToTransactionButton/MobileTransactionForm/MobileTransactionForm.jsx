import { useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import SelectCategory from '../../Expenses/SelectCategory/SelectCategory';
import AmountInput from '../../Expenses/Calculator/Calculator';
import { OrangeButton } from '../../Buttons/OrangeButton';
import { WhiteButton } from '../../Buttons/WhiteButton';
import {
  FormWrapper,
  StyledForm,
  StyledInputsContainer,
  ProductInput,
  ButtonWrapper,
} from './MobileTransactionForm.styled';
import { addExpense, addIncome } from '../../../redux/Transactions/operations';

export default function MobileTransactionForm() {
  const [elementCategory, setElementCategory] = useState('Category');
  const [startDate] = useState(new Date());

  const location = useLocation();
  const form = useRef(null);

  const dispatch = useDispatch();

  let categoryArray;
  let functionToDispatch;

  // Check location for submit incomes or expenses

  if (location.pathname === '/income') {
    categoryArray = ['Salary', 'Additional income'];
    functionToDispatch = addIncome;
  }
  if (location.pathname === '/expenses') {
    categoryArray = [
      'Transport',
      'Products',
      'Health',
      'Alcohol',
      'Entertainment',
      'Housing',
      'Technique',
      'Communal, communication',
      'Sports, hobbies',
      'Education',
      'Other',
    ];

    functionToDispatch = addExpense;
  }

  const handleSubmit = event => {
    event.preventDefault();
    const { description, sum } = event.target.elements;
    let transactionAmount = sum.value;

    // Verification for null inputs

    if (description.value.trim() === '') {
      toast('Please add a description');
      return;
    }
    if (elementCategory === 'Category') {
      toast('Please choose a category');
      return;
    }
    if (transactionAmount.trim() === '') {
      toast('Please enter an amount');
      return;
    }

    if (transactionAmount < 0) transactionAmount = transactionAmount * -1;

    // Prepare dispatch data

    const dispatchData = {
      description: description.value,
      amount: Number(transactionAmount),
      date: startDate.toISOString().split('T')[0],
      category: elementCategory,
    };

    dispatch(functionToDispatch(dispatchData));
    event.target.reset();
    setElementCategory('Category');
  };

  // Reset form

  const handleReset = () => {
    form.current.reset();
  };

  return (
    <>
      <FormWrapper>
        <StyledForm onSubmit={handleSubmit} ref={form}>
          <StyledInputsContainer>
            <ProductInput
              placeholder="Product description"
              name="description"
            />
            <SelectCategory
              categoryArray={categoryArray}
              elementCategory={elementCategory}
              setElementCategory={setElementCategory}
            />
            <AmountInput name="sum" />
          </StyledInputsContainer>
          <ButtonWrapper>
            <OrangeButton type="submit">INPUT</OrangeButton>
            <WhiteButton type="button" onClick={handleReset}>
              CLEAR
            </WhiteButton>
          </ButtonWrapper>
        </StyledForm>
      </FormWrapper>
    </>
  );
}
