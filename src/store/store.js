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

const rootReducers = combineReducers({
  cart: useCartReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
})

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['apiProductSlice'],
}

/*

** https://github.com/rt2zz/redux-persist
** https://blog.reactnativecoach.com/the-definitive-guide-to-redux-persist-84738167975

Blacklist & Whitelist
By Example:

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ["state_which_you_want_to_persist"],       // Will be persisted
  blacklist: ["state_which_you_do_not_want_to_persist"] // Will not be persisted
};

combineReducers({ 
  auth: AuthReducer,
  navigation: NavReducer, 
  notes: NotesReducer
});

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ["navigation"], // Will not be persisted
  whitelist: ["notes", auth],      // Will be persisted
};

*/


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
