/* import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice' 

import storage from '@react-native-async-storage/async-storage'
import { persistReducer,persistStore } from 'redux-persist'

export const store = configureStore({
  reducer: {
     user : userReducer
  },
}) */

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from './userSlice'; // user reducer'ınıza işaret eder

// Redux-persist konfigürasyonu
const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // async-storage kullanarak depolama

};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, userReducer);

// Store oluşturma
const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Persistor oluşturma
const persistor = persistStore(store);

export { store, persistor };