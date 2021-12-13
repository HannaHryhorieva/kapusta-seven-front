import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import logger from 'redux-logger';

import authReducer from './login/auth-reducer';
import balanceReducer from './balance/balance-reducer';
// import transactionReducer from './transaction/transactions-reduser';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const balancePersistConfig = {
  key: 'balance',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    balance: persistReducer(balancePersistConfig, balanceReducer),
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);
