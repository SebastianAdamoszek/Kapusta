import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  expensesSum: [],
  incomeSum: [],
  loading: false,
  error: null,
};

const summaryReducerSlice = createSlice({
  name: 'summary',
  initialState,
  reducers: {
    fetchExpensesSumSuccess: (state, action) => {
      // console.log('Dane z akcji:', action.payload);
      // console.log('Stan przed aktualizacją:', state);
      state.expensesSum = action.payload;
    },
    fetchExpensesSumFailure: (state, action) => {
      console.log('Błąd z akcji:', action.payload);
      state.error = action.payload;
    },
    fetchIncomeSumSuccess: (state, action) => {
      // console.log('Dane z akcji:', action.payload);
      // console.log('Stan przed aktualizacją:', state);
      state.incomeSum = action.payload;
    },
    fetchIncomeSumFailure: (state, action) => {
      console.log('Błąd z akcji:', action.payload);
      state.error = action.payload;
    },
  },
});

export const summaryReducer = summaryReducerSlice.reducer;

export const {
  fetchExpensesSumSuccess,
  fetchExpensesSumFailure,
  fetchIncomeSumSuccess,
  fetchIncomeSumFailure,
} = summaryReducerSlice.actions;
