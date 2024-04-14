import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  // updateUserBalance,
  // downloadUserBalance,
} from '../Transactions/apiTransactions';
import { setBalance } from '../../redux/reports/balanceSlice';

// axios.defaults.baseURL = 'https://kapusta-a0a137454a45.herokuapp.com/';
axios.defaults.baseURL = 'http://localhost:4000';


const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'users/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/registration', credentials);
      // setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const login = createAsyncThunk(
  'users/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('users/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const currentUser = createAsyncThunk(
  '/users/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (token) {
      setAuthHeader(token);
      try {
        const response = await axios.get('/current');
        const { balance } = response.data; 
        thunkAPI.dispatch(setBalance(balance)); 
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
    return thunkAPI.rejectWithValue('No token');
  }
);

export const getUserInfo = async () => {
  const { data } = await axios.get('user');
  return data;
};

// export const updateBalance = createAsyncThunk(
//   'users/updateBalance',
//   async (value, thunkAPI) => {
//     try {
//       const data = await updateUserBalance(value);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const downloadBalance = createAsyncThunk(
//   'users/downloadBalance',
//   async (value, thunkAPI) => {
//     try {
//       const data = await downloadUserBalance(value);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    setAuthHeader(persistedToken);
    if (!persistedToken) {
      return thunkAPI.rejectWithValue('No token');
    }
    try {
      const { data } = await getUserInfo();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
