import React from "react";
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
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

import todoReducer from '@/store/features/todos/todosSlice';

const rootReducer = combineReducers({
  todos: todoReducer,
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

const persistor = persistStore(store);


function ReduxWrapper({children}) {
  return (
    <Provider store={store}>
      <PersistGate loading={<h1>Loading ... </h1>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default ReduxWrapper;
