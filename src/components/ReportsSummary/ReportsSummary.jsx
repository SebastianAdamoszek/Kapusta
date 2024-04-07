import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReportsLogic } from '../Reports/ReportsLogic';
import {
  ReportsSummaryWrapper,
  ReportsSummaryList,
  ReportsSummaryListItem,
  ReportsSummaryExpenses,
  ReportsSummaryIncome,
  LineVertical,
  Currency,
} from './ReportsSummary.styled';
import {
  fetchExpensesSum,
  fetchIncomeSum,
} from '../../redux/reports/actionsSummary';
import {
  fetchExpensesSumSuccess,
  fetchExpensesSumFailure,
  fetchIncomeSumSuccess,
  fetchIncomeSumFailure,
} from '../../redux/reports/reducerSummary';

export const ReportsSummary = () => {
  const { currency } = ReportsLogic();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { summaryExpenses } = useSelector(state => state.summary.expensesSum);
  const { summaryIncome } = useSelector(state => state.summary.incomeSum);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const expensesSum = await dispatch(fetchExpensesSum());
        // console.log('Expenses Sum:', expensesSum); 
        dispatch(fetchExpensesSumSuccess(expensesSum)); 
        const incomeSum = await dispatch(fetchIncomeSum());
        // console.log('Income Sum:', incomeSum);
        dispatch(fetchIncomeSumSuccess(incomeSum)); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        dispatch(fetchExpensesSumFailure(error)); 
        dispatch(fetchIncomeSumFailure(error));
        setLoading(false);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <ReportsSummaryWrapper>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ReportsSummaryList>
          <ReportsSummaryListItem>
            <p>Expenses:</p>
            <ReportsSummaryExpenses>
              <span>-</span>
              <span>{summaryExpenses}</span>
              <Currency>{currency}</Currency>
            </ReportsSummaryExpenses>
          </ReportsSummaryListItem>
          <li>
            <LineVertical />
          </li>
          <ReportsSummaryListItem>
            <p>Income:</p>
            <ReportsSummaryIncome>
              <span>+</span>
              <span>{summaryIncome}</span>
              <Currency>{currency}</Currency>
            </ReportsSummaryIncome>
          </ReportsSummaryListItem>
        </ReportsSummaryList>
      )}
    </ReportsSummaryWrapper>
  );
};
