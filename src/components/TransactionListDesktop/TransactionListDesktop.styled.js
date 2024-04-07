import styled from 'styled-components';

export const StyledTransactionTable = styled.table`
  /* margin-top: 48px; */
  position: relative;
  border-collapse: collapse;
  display: table;
  flex-direction: column;
  max-width: 100vw;
  padding-left: 0;

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
        display: flex;

        &:nth-child(1) {
          /* Pierwsza kolumna */
          flex: 1 0 84px;
          justify-content: flex-start;
          padding-left: 20px;
        }
        &:nth-child(2) {
          /* Druga kolumna */
          flex: 1 0 168px;
          justify-content: flex-start;
          padding-left: 25px;
        }
        &:nth-child(3) {
          /* Trzecia kolumna */
          flex: 1 0 124px;
          padding-left: 6.8px;
        }
        &:nth-child(4) {
          /* Czwarta kolumna */
          flex: 1 0 107px;
          padding-left: 1.2px;
          justify-content: flex-end;
        }
        &:nth-child(5) {
          /* Piąta kolumna */
          flex: 1 0 82px;
          padding-right: 32px;
        }
      }
    }
  }

  tbody {
    width: 100%;
    display: block;
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: 344px;
    border-left: 2px solid #f5f6fb;
    border-top: none;
    border-bottom: 2px solid #f5f6fb;

    &::-webkit-scrollbar {
      width: 6.26px;
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 10px #f5f6fb;
    }
    &::-webkit-scrollbar-thumb {
      background: #ff751d;
      border-radius: 2px;
    }

    background-image: repeating-linear-gradient(
      #ffffff 0px,
      #ffffff 38px,
      #f5f6fb 40px
    );

    @media screen and (min-width: 768px) {
      min-height: 344px;
      max-height: 344px;
      height: auto;
      min-width: 624px;
    }

    @media screen and (min-width: 1280px) {
      min-width: 746px;
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
        overflow-x: hidden;
        display: flex;
        height: 40px;
        overflow: hidden;

        &:nth-child(1) {
          /* Pierwsza kolumna */
          flex: 1 0 84px;
          justify-content: flex-start;
          padding-left: 20px;
        }
        &:nth-child(2) {
          /* Druga kolumna */
          flex: 1 0 168px;
          justify-content: flex-start;
          padding-left: 25px;
          white-space: nowrap; /* Zapobieganie zawijaniu tekstu */
          overflow: hidden; /* Ukrywanie tekstu, który nie zmieści się w kontenerze */
          text-overflow: ellipsis; /* Pokazywanie "..." dla tekstu, który jest zbyt długi, aby się zmieścić */
        }
        &:nth-child(3) {
          /* Trzecia kolumna */
          flex: 1 0 124px;
          padding-left: 6.8px;
        }
        &:nth-child(4) {
          /* Czwarta kolumna */
          flex: 1 0 107px;
          padding-left: 1.2px;
          justify-content: flex-end;
          font-weight: 700;
        }
        &:nth-child(5) {
          /* Piąta kolumna */
          flex: 1 0 82px;
          padding-left: 32px;
        }
      }
    }
  }
  // @media screen and (max-width: 767px) {
  //   display: none;
  // }
`;
