import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 53px auto 105px auto;
  width: 280px;
  padding: 40px 20px;
  background-color: var(--bg-white-color);
  border-radius: 30px;
  box-shadow: 0px 10px 60px 0px var(--box-shadow-color);

  @media screen and (min-width: 768px) {
    margin: 80px auto 155px auto;
    padding: 56px 83px;
    width: 426px;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 173px;
    margin: 0;
    left: 763px;
    right: 91px;
  }
`;

export const FormAdvice = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  width: 222px;
  text-align: center;
  letter-spacing: 0.04em;
  line-height: 1.4;
  color: var(--secondaryTextColor);
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: auto;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 29px;
  }
`;

export const FormAdviceSecond = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  width: 238px;
  text-align: left;
  letter-spacing: 0.04em;
  line-height: 1.4;
  color: var(--secondaryTextColor);
  margin-bottom: 16px;
  margin-left: 0;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 29px;
  }
`;

export const GoogleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  column-gap: 9.5px;
  border: none;
  padding: 10px 19px;
  border-radius: 26px;
  cursor: pointer;
  margin-bottom: 32px;
  box-shadow: 1px 2px 3px 0px var(--box-shadow-color);
`;

export const GoogleText = styled.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
  line-height: 1.17;
`;

export const FormForm = styled.form`
  row-gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormLabel = styled.label`
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.04em;
  align-self: flex-start;
  margin-bottom: 12px;
  margin-left: 0;
  color: var(--textColor);

  @media screen and (min-width: 768px) {
    font-size: 12px;
    letter-spacing: 0.04em;
  }
`;

export const FormInput = styled.input`
  padding: 17px 0 17px 20px;
  margin-left: 0;
  margin-bottom: 20px;
  font-size: 14px;
  letter-spacing: 0.04em;
  text-align: left;
  min-width: 240px;
  border-radius: 30px;
  border: none;
  background-color: var(--bg-input-color);
  color: var(--text-input-color);

  @media screen and (min-width: 768px) {
    padding: 17px 0 17px 20px;
    min-width: 259px;
    margin-bottom: 32px;
  }
`;

export const FormButtons = styled.div`
  display: flex;
  column-gap: 4px;

  @media screen and (min-width: 768px) {
    column-gap: 15px;
  }
`;

export const FormButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 12px 34px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  color: var(--btn-grey-text-color);
  letter-spacing: 0.02em;
  align-items: center;
  border: none;
  border-radius: 16px;
  background-color: var(--btn-grey-bg-color);
  box-shadow: 1px 3px 5px 0px var(--btn-grey-drop-shadow-color);
  width: 50%;
  &:hover,
  &:focus {
    color: var(--btn-orange-text-color);
    background-color: var(--btn-orange-bg-color);
    box-shadow: var(--btn-orange-box-shadow) 1px 3px 5px 0px;
  }

  @media screen and (min-width: 768px) {
    padding: 12px 34px;
  }
`;
export const ErrorMessage = styled.p`
  color: red;
  font-size: 10px;
  letter-spacing: 0.04em;
  align-self: flex-start;
  margin-top: -20px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-top: -32px;
  }
`;
export const ErrorStar = styled.span`
  color: red;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.04em;
`;
