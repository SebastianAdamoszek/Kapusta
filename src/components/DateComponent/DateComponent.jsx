import React, { useState } from 'react';
import ArrowL from '../../icons/arrow-l.svg';
import ArrowR from '../../icons/arrow-r.svg';
import { DateSelectWrapper, DateSelect, DateSelectPrev, DateSelectNext } from './DateComponent.styled'; 
import { format, addMonths, subMonths } from 'date-fns';

export const DateComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const handlePreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  return (
    <DateSelectWrapper>
      <h3>Current period:</h3>
      <DateSelect>
        <DateSelectPrev
          src={ArrowL}
          alt="Previous Month"
          onClick={handlePreviousMonth}
        />
        <h2>{format(currentDate, 'MMMM yyyy')}</h2>
        <DateSelectNext
          src={ArrowR}
          alt="Next Month"
          onClick={handleNextMonth}
        />
      </DateSelect>
    </DateSelectWrapper>
  );
};
