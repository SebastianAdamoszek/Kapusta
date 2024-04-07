import React from 'react';

import {
  StyledNavMobile,
  StyledNavDesktop,
  Link,
} from './TransactionCategoryNav.styled';

export const TransactionNavMobile = () => {
  return (
    <StyledNavMobile>
      <Link to="/expenses">expenses</Link>
      <Link to="/income">income</Link>
    </StyledNavMobile>
  );
};

export const TransactionNavDesktop = () => {
  return (
    <StyledNavDesktop>
      <Link to="/expenses">expenses</Link>
      <Link to="/income">income</Link>
    </StyledNavDesktop>
  );
};

// import { useSelector } from 'react-redux';
// import { getIncomeTransactions } from '../../../redux/Transactions/apiTransactions';
// import { getExpenseTransactions } from '../../../redux/Transactions/apiTransactions';
// import {
//   Container,
//   Total,
//   TotalData,
//   Type,
// } from './TransactionCategoryNav.styled';

// export const TotalTransactionsData = () => {
//   const dataIncomes = useSelector(getIncomeTransactions);
//   const dataExpenses = useSelector(getExpenseTransactions);

//   return (
//     <Container>
//       <TotalData>
//         <Type>Expenses:</Type>
//         <Total typeReport={'Expenses'}>
//           {dataExpenses ? `- ${dataExpenses.expenseTotal}` : '0'}
//         </Total>
//       </TotalData>

//       <TotalData>
//         <Type>Income:</Type>
//         <Total typeReport={'Income'}>
//           {dataIncomes ? `+ ${dataIncomes.incomeTotal}` : '0'}
//         </Total>
//       </TotalData>
//     </Container>
//   );
// };
