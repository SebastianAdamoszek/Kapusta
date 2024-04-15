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
import { useScreenSize } from '../../hooks/useScreenSize';

const Income = () => {
  const dispatch = useDispatch();
  const allIncome = useSelector(selectIncomeTransactions);
  const user = useSelector(selectIsLoggedIn);
  const balance = useSelector(selectBalance);
  const color = 'green';
  const location = useLocation();
  const { mobileScreen, tabletScreen, desktopScreen } = useScreenSize();

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
            {desktopScreen && (
              <TransactionListDesktop>
                {allIncome}
                {color}
              </TransactionListDesktop>
            )}
            {tabletScreen && (
              <TransactionListDesktop>
                {allIncome}
                {color}
              </TransactionListDesktop>
            )}

            {mobileScreen && (
              <TransactionListMobile>
                {allIncome}
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
export default Income;
