import React from 'react';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { Provider } from 'react-redux';

import { apiSlice } from '@/store/features/apis/apiSlice';
import useCartReducer from '@/store/features/slices/useCartSlice';

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['apiProductSlice'],
}

export const rootReducers = combineReducers({
  cart: useCartReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
})

setupListeners(store.dispatch)

let persistor = persistStore(store)

function ReduxWrapper(props) {
  return (
    <Provider store={store}>
      <PersistGate loading={<p>Loading ....</p>}  persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  )
}

export default ReduxWrapper;
