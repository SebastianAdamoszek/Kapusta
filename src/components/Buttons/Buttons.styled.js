import styled from 'styled-components';

export const StyledOrangeButton = styled.button`
  padding: 12px 34px;
  width: 130px;
  border: none;
  background-color: #ff751d;
  border-radius: 16px;
  color: #fff;
  font-weight: 700;
  font-family: inherit;
  text-align: center;
  letter-spacing: 0.02em;
  font-size: 12px;
  line-height: 1.17;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 136px;
  }
`;

export const StyledWhiteButton = styled.button`
  padding: 12px 25px;
  width: 130px;
  border: 1px solid #f5f6fb;
  background-color: #fff;
  border-radius: 16px;
  color: #52555f;
  font-size: 12px;
  font-weight: 700;
  font-family: inherit;
  text-align: center;
  letter-spacing: 0.02em;
  line-height: 1.17;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    border: 2px solid #f5f6fb;
    width: 136px;
  }
`;
