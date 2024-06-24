import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import doctorReducer from './doctorSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, doctorReducer);

export const store = configureStore({
  reducer: {
    appointments: persistedReducer,
  },
});

export const persistor = persistStore(store);
