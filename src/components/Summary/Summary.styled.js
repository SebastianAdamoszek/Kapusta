import styled from 'styled-components';

export const StyledSummaryTable = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 600px;
    left: -30px;
    min-width: 230px;
    min-height: 278px;
    background-color: #f5f6fb;
    display: inline-flex;
    flex-direction: column;
    text-align: center;
    border-radius: 16px;
    border-bottom-left-radius: 0px;
    margin-top: 40px;
    margin-left: 32px;
  }

  @media screen and (min-width: 1280px) {
    position: static;
    margin-top: 0px;
    min-width: 213px;
    max-width: 213px;
    min-height: 280px;
    align-self: flex-start;
    margin-left: 75px;
  }

  background-image: repeating-linear-gradient(
    #f5f6fb 0px,
    #f5f6fb 37px,
    #ffffff 40px
  );
`;

export const StyledSummaryTableHead = styled.li`
  font-weight: 700;
  letter-spacing: 0.02em;
  padding: 12px 0px;
  color: #00000;
`;

export const StyledSummaryRow = styled.li`
  display: flex;
  align-items: center;
  gap: 22px;
  padding: 12px 21px;
  border-top: 2px solid #fffff;

  @media screen and (min-width: 1200px) {
    padding: 12px 12px;
  }
`;

export const StyledSummaryMonth = styled.p`
  width: 84px;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  text-align: left;
`;

export const StyledSummaryValue = styled.p`
  width: 84px;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  text-align: right;
`;
