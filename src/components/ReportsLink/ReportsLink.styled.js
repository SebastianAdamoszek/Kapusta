import styled from 'styled-components';

export const ReportsContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 35px;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    column-gap: 15px;
    justify-content: center;
    margin-top: auto;
    margin-bottom: 0;
  }
`;

export const Logo = styled.svg`
  width: 24px;
  height: 24px;
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.04em;
  line-height: 1.16;
  color: rgba(82, 85, 95, 0.7);
  padding-top: 6px;
`;
