import styled from 'styled-components';

export const FrameContainer = styled.div`
  /* background-color: transparent; */

  @media screen and (min-width: 768px) {
    margin: 0px auto;
    padding: 24px 40px 42px;
    max-width: 704px;
    background-color: #fff;
    border-radius: 0px 30px 30px 30px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    position: relative;
    margin-top: 100px;
  }

  @media screen and (min-width: 1280px) {
    padding: 32px 32px 61px;
    max-width: 1098px;
    margin-top: 48px;
  }
`;

export const TableAndSummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0;
    padding-top: 48px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1098px;
    padding-top: 60px;
  }
`;

export const StyledHomePage = styled.div`
  margin-top: 14px;

  @media screen and (min-width: 768px) {
    margin-top: 96px;
  }
`;

export const ReportsAndBalanceContainer = styled.div`

    @media screen and (min-width: 769px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      margin-bottom: 60px;
      margin-right: 32px;
    }

    @media screen and (min-width: 1280px) {
      max-width: 1098px;
      margin-bottom: 8px;
      margin-right: 91px;
    }
  }
`;
