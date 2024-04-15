const balanceFetch = async () => {
    try {
      // Tutaj wykonujesz żądanie do swojego backendu, aby pobrać aktualny balans użytkownika
      const response = await fetch('/api/balance'); // Zakładając, że endpoint to /api/balance
      if (!response.ok) {
        throw new Error('Failed to fetch balance');
      }
      const data = await response.json();
      return data.balance; // Zwracamy pobrany balans
    } catch (error) {
      console.error('Error fetching balance:', error.message);
      throw error; // Rzucamy błąd, jeśli nie udało się pobrać balansu
    }
  };
  
  export default balanceFetch;
  