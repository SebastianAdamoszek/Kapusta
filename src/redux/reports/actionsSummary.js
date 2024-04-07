// actionsSummary.js
import { downloadSummaryExpenses, downloadSummaryIncome } from './summaryExpensesIncome';

export const fetchExpensesSum = () => async dispatch => {
  try {
    const expensesSum = await downloadSummaryExpenses();
   // console.log('ACTIONS Expenses Sum:', expensesSum);
    dispatch({ type: 'FETCH_EXPENSES_SUM_SUCCESS', payload: expensesSum });
    return expensesSum;
  } catch (error) {
    dispatch({ type: 'FETCH_EXPENSES_SUM_FAILURE', payload: error.message });
    throw error;
  }
};


export const fetchIncomeSum = () => async dispatch => {
  try {
    const incomeSum = await downloadSummaryIncome();
    // console.log('ACTIONS Income Sum:', incomeSum); 

    dispatch({ type: 'FETCH_INCOME_SUM_SUCCESS', payload: incomeSum });
    return incomeSum;
  } catch (error) {
    dispatch({ type: 'FETCH_INCOME_SUM_FAILURE', payload: error.message });
    throw error;
  }
};
