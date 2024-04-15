// import { useDispatch, useSelector } from 'react-redux';
// import { ReactComponent as DeleteIcon } from './deleteIcon.svg';
// import { selectAllTransactions } from '../../../redux/selectors';
// import { deleteTransaction } from '../../../redux/Transactions/operations';
// import {
//   ItemName,
//   ItemNameContainer,
//   ItemDate,
//   ItemDateContainer,
//   ItemStyled,
//   ItemCategory,
//   Sum,
//   SumContainer,
//   StyledList,
// } from './TransactionsList.styled';

// export const TransactionsList = () => {
//   const allTransactions = useSelector(selectAllTransactions);

//   const dispatch = useDispatch();

//   const sortedTransactions = allTransactions.slice().sort((a, b) => {
//     const first = new Date(a.date).getTime();
//     const second = new Date(b.date).getTime();
//     if (first - second === 0) {
//       return first;
//     }
//     return second - first;
//   });

//   const handleDelete = event => {
//     dispatch(deleteTransaction(event.currentTarget.id));
//   };

//   return (
//     <StyledList className="container">
//       {sortedTransactions.slice(0, 15).map(item => {
//         const { _id, description, amount, date, category } = item;

//         // Check the category and assign the color based on the type of operation
//         let color;
//         let minus = false;

//         if (category === 'Salary' || category === 'Additional income') {
//           color = 'green';
//         } else {
//           color = 'red';
//           minus = '-';
//         }

//         return (
//           <ItemStyled key={_id}>
//             <ItemNameContainer>
//               <ItemName>{description}</ItemName>
//               <ItemDateContainer>
//                 <ItemDate>{date.split('-').reverse().join('.')}</ItemDate>
//                 <ItemCategory>{category}</ItemCategory>
//               </ItemDateContainer>
//             </ItemNameContainer>
//             <SumContainer>
//               <Sum style={{ color }} className="sum">
//                 {minus} {amount}.00 USD.
//               </Sum>
//               <span
//                 id={_id}
//                 onClick={handleDelete}
//                 style={{ cursor: 'pointer' }}
//               >
//                 <DeleteIcon />
//               </span>
//             </SumContainer>
//           </ItemStyled>
//         );
//       })}
//     </StyledList>
//   );
// };
