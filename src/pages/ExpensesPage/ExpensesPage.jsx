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
import { TransactionListMobile } from 'components/TransactionListDesktop/TransactionListMobile/TransactionListMobile';
import { ToTransactionButton } from 'components/ToTransactionButton/ToTransactionButton';
import {
  selectBalance,
  selectExpenseTransactions,
  selectIsLoggedIn,
} from '../../redux/selectors';
import { getExpenses } from '../../redux/Transactions/operations';
import {
  PageContainer,
  FrameContainer,
  TableAndSummaryContainer,
  ReportsAndBalanceContainer,
} from './ExpensesPage.styled';
import { CabbagesBottom } from '../../components/Background/Authorized/CabbagesBottom';
import { useScreenSize } from '../../hooks/useScreenSize';

const Expenses = () => {
  const dispatch = useDispatch();
  const allExpenses = useSelector(selectExpenseTransactions);
  const user = useSelector(selectIsLoggedIn);
  const balance = useSelector(selectBalance);
  const color = 'red';
  const location = useLocation();
  const { mobileScreen, tabletScreen, desktopScreen } = useScreenSize();

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
            {desktopScreen && (
              <TransactionListDesktop>
                {allExpenses}
                {color}
              </TransactionListDesktop>
            )}
            {tabletScreen && (
              <TransactionListDesktop>
                {allExpenses}
                {color}
              </TransactionListDesktop>
            )}

            {mobileScreen && (
              <TransactionListMobile>
                {allExpenses}
                {color}
              </TransactionListMobile>
            )}
            <Summary />
          </TableAndSummaryContainer>
        </FrameContainer>
      </PageContainer>
    </HelmetProvider>
  );
};
export default Expenses;
