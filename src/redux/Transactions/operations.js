import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from '../../redux/Auth/operations';
import {
  addIncomeTransaction,
  getIncomeTransactions,
  addExpenseTransaction,
  getExpenseTransactions,
  // updateUserBalance,
  deleteTransactionById,
} from './apiTransactions';

export const addIncome = createAsyncThunk(
  'transactions/addIncome',
  async (value, thunkAPI) => {
    try {
      const data = await addIncomeTransaction(value);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getIncome = createAsyncThunk(
  'transactions/getIncome',
  async (_, thunkAPI) => {
    try {
      const data = await getIncomeTransactions();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addExpense = createAsyncThunk(
  'transactions/addExpense',
  async (value, thunkAPI) => {
    try {
      const data = await addExpenseTransaction(value);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getExpenses = createAsyncThunk(
  'transactions/getExpenses',
  async (_, thunkAPI) => {
    try {
      const data = await getExpenseTransactions();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const updateBalance = createAsyncThunk(
//   'transactions/updateBalance',
//   async (value, thunkAPI) => {
//     try {
//       const data = await updateUserBalance(value);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const getAllTransactions = createAsyncThunk(
  'transactions/getAllTransactions',
  async (_, thunkAPI) => {
    try {
      const data = await getUserInfo();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (id, thunkAPI) => {
    try {
      const { newBalance } = await deleteTransactionById(id);
      return { newBalance, id };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
