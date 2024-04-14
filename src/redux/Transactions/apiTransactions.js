import axios from 'axios';

// axios.defaults.baseURL = 'https://kapusta-a0a137454a45.herokuapp.com/';
// axios.defaults.baseURL = 'http://localhost:4000';

export const addExpenseTransaction = async info => {
  const { data } = await axios.post('/transaction/expenses', info);

  return data;
};

export const getExpenseTransactions = async () => {
  const { data } = await axios.get('/transaction/expenses');
  return data;
};

export const addIncomeTransaction = async info => {
  const { data } = await axios.post('/transaction/income', info);
  return data;
};

export const getIncomeTransactions = async () => {
  const { data } = await axios.get('/transaction/income');
  return data;
};

export const deleteTransactionById = async id => {
  const { data } = await axios.delete(`/transaction/${id}`);
  return data;
};

export const getIncomeCategories = async () => {
  const { data } = await axios.get('/transaction/income-categories');
  return data;
};

export const getExpenseCategories = async () => {
  const { data } = await axios.get('/transaction/expense-categories');
  return data;
};

// export const getPeriodData = async date => {
//   const { data } = await axios.get(`/transaction/period-data?date=${date}`);
//   return data;
// };

export const getUserInfo = async () => {
  const { data } = await axios.get('user');
  return data;
};

export const updateUserBalance = async balance => {
  const response = await axios.patch('/user/balance', { balance });
  return response.data;
};

// export const downloadUserBalance = async balance => {
//   const response = await axios.get('/user/balance', { balance });
//   return response.data;
// };
export const downloadUserBalance = async balance => {
  try {
    const response = await axios.get('/user/balance'); 
    console.log('Response data:', response.data);
    return response.data.balance; 
  } catch (error) {
    console.error('Error fetching balance:', error);
    throw new Error('Failed to fetch balance from server');
  }
};