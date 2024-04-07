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
import { TransactionListMobile } from '../../components/TransactionListDesktop/TransactionListMobile/TransactionListMobile';
import { TransactionListDesktop } from 'components/TransactionListDesktop/TransactionListDesktop';
import { ToTransactionButton } from 'components/ToTransactionButton/ToTransactionButton';
import {
  selectBalance,
  selectIncomeTransactions,
  selectIsLoggedIn,
} from '../../redux/selectors';
import { getIncome } from '../../redux/Transactions/operations';
import {
  FrameContainer,
  TableAndSummaryContainer,
  StyledHomePage,
  ReportsAndBalanceContainer,
} from './IncomePage.styled';
import { CabbagesBottom } from '../../components/Background/Authorized/CabbagesBottom';

const Income = () => {
  const dispatch = useDispatch();

  const allIncome = useSelector(selectIncomeTransactions);
  const user = useSelector(selectIsLoggedIn);
  const balance = useSelector(selectBalance);
  const color = 'green';

  const { mobileScreen, tabletScreen, desktopScreen } = useScreenSize();

  const location = useLocation();

  useEffect(() => {
    if (user) {
      dispatch(getIncome());
    }
  }, [dispatch, user, balance]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Income</title>
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
        {mobileScreen ? (
          <TransactionListMobile>
            {allIncome}
            {color}
          </TransactionListMobile>
        ) : (
          <TableAndSummaryContainer>
            <TransactionListDesktop>
              {allIncome}
              {color}
            </TransactionListDesktop>
            {desktopScreen && <Summary />}
          </TableAndSummaryContainer>
        )}
      </FrameContainer>
      {tabletScreen && <Summary />}
    </HelmetProvider>
  );
};

export default Income;
