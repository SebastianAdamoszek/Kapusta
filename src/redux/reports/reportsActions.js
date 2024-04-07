// reportsActions.js

export const setExpensesSum = expensesSum => {
  return {
    type: 'SET_EXPENSES_SUM',
    payload: expensesSum,
  };
};

export const setIncomeSum = incomeSum => {
  return {
    type: 'SET_INCOME_SUM',
    payload: incomeSum,
  };
};
