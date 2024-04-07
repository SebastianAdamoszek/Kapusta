import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { StyledDatePicker } from './DateSelector.styled';
import { ReactComponent as Calendar } from './calendar.svg';

const DateSelector = ({ startDate, setStartDate }) => {
  const handleClick = event => {
    event.preventDefault();
  };

  const CustomDateInput = React.forwardRef(({ value, onClick }, ref) => (
    <button className="datePicker" onClick={onClick} ref={ref}>
      <Calendar className="calendarIcon" />
      {value}
    </button>
  ));

  return (
    <StyledDatePicker onClick={handleClick}>
      <DatePicker
        dateFormat="dd.MM.yyyy"
        selected={startDate}
        onChange={date => setStartDate(date)}
        customInput={<CustomDateInput />}
      />
    </StyledDatePicker>
  );
};

export default DateSelector;

DateSelector.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  setStartDate: PropTypes.func.isRequired,
};
