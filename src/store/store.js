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
