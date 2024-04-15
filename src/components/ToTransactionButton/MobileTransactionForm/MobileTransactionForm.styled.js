import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 115px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductInput = styled.input`
  margin: auto auto;
  width: 280px;
  height: 44px;
  padding: 2px 20px;
  border: 2px solid #ffffff;
  border-radius: 0 0 16px 16px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.06px;
  outline: none;
  background-color: #f5f6fb;
  color: #c7ccdc;

  &::placeholder {
    color: #c7ccdc;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 40px;
`;
