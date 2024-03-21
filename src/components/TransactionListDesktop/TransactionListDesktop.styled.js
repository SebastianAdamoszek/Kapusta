import styled from 'styled-components';

export const StyledTransactionTable = styled.table`
  /* margin-top: 48px; */
  position: relative;
  border-collapse: collapse;
  display: table;
  flex-direction: column;
  max-width: 746px;

  th {
    width: 100%;
    height: 38px;
    background: #f5f6fb;
    border: none;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.02em;
    border-collapse: collapse;
  }

  tr th:first-child {
    border-radius: 16px 0 0 0;
  }

  tr th:last-child {
    border-radius: 0 16px 0 0;
  }

  thead {
    justify-content: center;
    tr {
      justify-content: center;
      display: flex;
      th {
        align-items: center;
        justify-content: center;
        flex: 1 0 calc(100% / 5);
        display: flex;
      }
    }
  }

  tbody {
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 344px;
    border-left: 2px solid #f5f6fb;
    border-top: none;
    border-bottom: 2px solid #f5f6fb;

    @media screen and (min-width: 768px) {
      min-height: 344px;
      max-height: 480px;
      height: auto;
    }

    ::-webkit-scrollbar {
      width: 7px;
    }
    ::-webkit-scrollbar-track {
      background-color: #f5f6fb;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #ff751d;
      border-radius: 8px;
    }

    tr {
      justify-content: center;
      display: flex;
      &:not(:last-child) {
        border-bottom: 2px solid #f5f6fb;
      }

      td {
        position: relative;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex: 1 0 calc(100% / 5);
        overflow-x: hidden;
        display: flex;
        height: 40px;
        overflow: hidden;
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
