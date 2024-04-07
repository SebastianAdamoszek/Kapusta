import styled from 'styled-components';

export const PageContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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
    margin-top: 50px;
  }

  @media screen and (min-width: 1280px) {
    padding: 32px 32px 61px;
    max-width: 1098px;
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
  }
`;

export const ReportsAndBalanceContainer = styled.div`

    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: flex-end;
      gap: 230px;
      align-items: center;
      margin: 60px 0 32px 0;
      width: 704px;
    }
    @media screen and (min-width: 1280px) {
      width: 1098px;
      gap: 50px;

    }
  }
`;
