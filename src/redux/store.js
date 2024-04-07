import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/authSlice';
import { transactionsReduser } from './Transactions/TransactionsSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { reportsReducer } from './reports/reportsSlice';
import { reportsQueryReducer } from './reportsQuery/reportsQuerySlice';
import { summaryReducer } from './reports/reducerSummary';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// Konfiguracja Redux store
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    transactions: transactionsReduser,
    reports: reportsReducer,
    reportsQuery: reportsQueryReducer,
    summary: summaryReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Inicjalizacja persistora do trwałego przechowywania stanu
export const persistor = persistStore(store);

// Sposoby sprawdzenia stanu Redux store:
/*
  1. Użyj narzędzi deweloperskich przeglądarki do przeglądania stanu Redux store w czasie rzeczywistym.
  2. Wykorzystaj funkcje useSelector lub komponenty connect, aby odczytać dane z Redux store i wyświetlić je w komponentach React.
  3. Umieść console.log w reduktorach i akcjach, aby śledzić, czy akcje są wywoływane poprawnie i czy dane są przekazywane do reduktorów zgodnie z oczekiwaniami.
  4. Utwórz testy jednostkowe dla reduktorów, aby upewnić się, że zachowują się zgodnie z oczekiwaniami dla różnych przypadków działania.
*/
