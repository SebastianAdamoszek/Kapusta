/* AUTH SELECTORS */

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUserName = state => state.auth.user.name;

export const selectUserEmail = state => state.auth.user.email;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectBalance = state => state.auth.balance;

// export const selectIsRegisteredIn = state => state.auth.isRegisteredIn;

/* TRANSACTIONS SELECTORS */

export const selectIsLoading = store => store.transactions.isLoading;

export const selectExpenseTransactions = store =>
  store.transactions.expences.expenseTransactions;

export const selectIncomeTransactions = store =>
  store.transactions.incomes.incomeTransactions;

export const selectAllTransactions = store =>
  store.transactions.allTransactions;

export const selectExpensesSummary = store =>
  store.transactions.expences.monthsStats;

export const selectIncomeSummary = store =>
  store.transactions.incomes.monthsStats;

// export const selectNewBalance = store => store.transactions.newBalance;

/* EXTRADATA SELECTORS */

const getDate = state => state.extraData.date;

export const extraDataSelectors = {
  getDate,
};
