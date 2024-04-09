import axios from 'axios';

// axios.defaults.baseURL = 'https://kapusta-a0a137454a45.herokuapp.com/';
// axios.defaults.baseURL = 'http://localhost:4000';

export const downloadSummaryExpenses = async () => {
  try {
    const response = await axios.get('/summary/expenses');
    // console.log('Response from expenses endpoint:', response.data);
    return response.data;
  } catch (error) {
    console.error('Błąd podczas pobierania sumy wydatków:', error);
    throw error;
  }
};

export const downloadSummaryIncome = async () => {
  try {
    const response = await axios.get('/summary/income');
    // console.log('Response from income endpoint:', response.data);

    return response.data;
  } catch (error) {
    console.error('Błąd podczas pobierania sumy przychodów:', error);
    throw error;
  }
};
