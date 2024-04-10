import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReportsLink } from 'components/ReportsLink/ReportsLink';
import BalanceForm from 'components/BalanceForm/BalanceForm';
import {
  TransactionNavMobile,
  TransactionNavDesktop,
} from 'components/Expenses/TransactionCategoryNav/TransactionCategoryNav';
import Form from 'components/Expenses/Form';
import { Summary } from 'components/Summary/Summary';
import { TransactionListDesktop } from 'components/TransactionListDesktop/TransactionListDesktop';
import { ToTransactionButton } from 'components/ToTransactionButton/ToTransactionButton';
import {
  selectBalance,
  selectIncomeTransactions,
  selectIsLoggedIn,
} from '../../redux/selectors';
import { getIncome } from '../../redux/Transactions/operations';
import { CabbagesBottom } from '../../components/Background/Authorized/CabbagesBottom';
import {
  PageContainer,
  FrameContainer,
  TableAndSummaryContainer,
  ReportsAndBalanceContainer,
} from '../ExpensesPage/ExpensesPage.styled';

const Income = () => {
  const dispatch = useDispatch();
  const allIncome = useSelector(selectIncomeTransactions);
  const user = useSelector(selectIsLoggedIn);
  const balance = useSelector(selectBalance);
  const color = 'green';
  const location = useLocation();

  useEffect(() => {
    if (user) {
      dispatch(getIncome());
    }
  }, [dispatch, user, balance]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Expenses</title>
      </Helmet>
      <CabbagesBottom />
      <TransactionNavMobile />
      <PageContainer>
        <ToTransactionButton />
        <ReportsAndBalanceContainer>
          <BalanceForm />
          <ReportsLink to="/reports" state={{ from: location }} />
        </ReportsAndBalanceContainer>
        <FrameContainer>
          <TransactionNavDesktop />
          <Form />
          <TableAndSummaryContainer>
            <TransactionListDesktop>
              {allIncome}
              {color}
            </TransactionListDesktop>
            <Summary />
          </TableAndSummaryContainer>
        </FrameContainer>
      </PageContainer>
    </HelmetProvider>
  );
};
export default Income;
