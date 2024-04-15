import styled from 'styled-components';

export const StyledDatePicker = styled.div`
  .calendarIcon {
    width: 20px;
    height: 20px;
    fill: #52555f;
  }
  @media screen and (min-width: 768px) {
    margin-top: 13px;
  }

  .datePicker {
    display: flex;
    gap: 10px;
    align-items: center;
    height: 20px;
    font-size: 12px;
    font-weight: 900;
    line-height: calc(14 / 12);
    letter-spacing: 1.04;
    color: #52555f;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: transparent;
    // padding-inline: 0;

    :hover,
    :focus {
      color: #ff751d;
    }

    :hover .calendarIcon,
    :focus .calendarIcon {
      fill: #ff751d;
    }
  }
`;
