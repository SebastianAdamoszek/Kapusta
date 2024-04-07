import styled from 'styled-components';

export const ToTransactionBtn = styled.button`
  @media screen and (max-width: 767.99px) {
    display: flex;
    align-items: center;
    margin: 75px 0 32px 0;
    border: none;
    background-color: transparent;
    column-gap: 5px;
    position: relative;
    top: 0;
    left: -80px;
  }
`;

export const Logo = styled.svg`
  width: 18px;
  height: 18px;
`;

export const Logo2 = styled(Logo)`
  width: 18px;
  height: 18px;
`;
export const Text = styled.p`
  font-family: Roboto;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.02em;
`;

export const Logo2Wrapper = styled.div`
  position: fixed;
  top: 76px; /* Dostosuj tę wartość według potrzeb */
  left: 20px; /* Dostosuj tę wartość według potrzeb */
  z-index: 20;
`;
