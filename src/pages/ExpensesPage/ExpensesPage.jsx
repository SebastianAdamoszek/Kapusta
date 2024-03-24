import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useScreenSize } from 'hooks/useScreenSize';
import { ReportsLink } from 'components/ReportsLink/ReportsLink';
import BalanceForm from 'components/BalanceForm/BalanceForm';
import { TransactionsList } from '../../components/Expenses/TransactionsList/TransactionsList';
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
  selectExpenseTransactions,
  selectIsLoggedIn,
} from '../../redux/selectors';
import { getExpenses } from '../../redux/Transactions/operations';
import {
  FrameContainer,
  TableAndSummaryContainer,
  StyledHomePage,
  ReportsAndBalanceContainer,
} from './ExpensesPage.styled';
import { CabbagesBottom } from '../../components/Background/Authorized/CabbagesBottom';

const Expenses = () => {
  const dispatch = useDispatch();

  const allExpenses = useSelector(selectExpenseTransactions);
  const user = useSelector(selectIsLoggedIn);
  const balance = useSelector(selectBalance);
  const color = 'red';

  const { mobileScreen, tabletScreen, desktopScreen } = useScreenSize();

  const location = useLocation();

  useEffect(() => {
    if (user) {
      dispatch(getExpenses());
    }
  }, [dispatch, user, balance]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Expenses</title>
      </Helmet>
      <CabbagesBottom />
      {mobileScreen && <ToTransactionButton />}
      <StyledHomePage>
        <ReportsAndBalanceContainer>
          {mobileScreen && (
            <ReportsLink to="/reports" state={{ from: location }} />
          )}
          <BalanceForm />
          {!mobileScreen && (
            <ReportsLink to="/reports" state={{ from: location }} />
          )}
        </ReportsAndBalanceContainer>
        {mobileScreen && <TransactionNavMobile />}

        {mobileScreen && <TransactionsList />}
      </StyledHomePage>
      <FrameContainer>
        {' '}
        {!mobileScreen && <TransactionNavDesktop />}
        <Form />
        <TableAndSummaryContainer>
          <TransactionListDesktop>
            {allExpenses}
            {color}
          </TransactionListDesktop>
          {desktopScreen && <Summary />}
        </TableAndSummaryContainer>
      </FrameContainer>
      {tabletScreen && <Summary />}
    </HelmetProvider>
  );
};

export default Expenses;
