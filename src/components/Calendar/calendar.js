// import React, { useState, useEffect } from 'react';
// // import Calendar from 'react-datepicker';
// import pl from 'date-fns/locale/pl';
// import { DatePickerStyled } from './Calendar.styled';
// import 'react-datepicker/dist/react-datepicker.css';
// import { useDispatch } from 'react-redux';
// import { initDate } from '../../redux/ExtraData/ExtraDataReducer';
// import calendar from '../../icons/calendar.svg';

// export function DatePicker({ className }) {
//   const [value, onChange] = useState(new Date(), 'yyyy-MM-dd');
//   const dispatch = useDispatch();

//   const handleDateChange = date => {
//     onChange(date);
//     const year = String(date.getFullYear());
//     const month = String(date.getMonth());
//     const day = String(date.getDate());
//     dispatch(initDate({ month, day, year }));
//   };

//   useEffect(() => {
//     handleDateChange(new Date());
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div>
//       <img src={calendar} alt="calendar" />
//       <DatePickerStyled
//         locale={pl}
//         dateFormat="dd.MM.yyyy"
//         maxDate={new Date()}
//         selected={value}
//         onChange={handleDateChange}
//         className={className}
//       />
//     </div>
//   );
// }
