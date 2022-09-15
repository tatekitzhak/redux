import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './features/todos/todosSlice';
/**
 * https://dev.to/raaynaldo/redux-toolkit-setup-tutorial-5fjf
 * https://github.com/raaynaldo/redux-toolkit-tutorial
 */

export default configureStore({
  reducer: {
    todos: todosReducer,
  },
});

/**
 
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { combineReducers } from '@reduxjs/toolkit'
import { apiSlice } from '../features/apiSlice'
import useCartReducer from '../features/useCartSlice'

import storage from 'redux-persist/lib/storage'

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

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

export default store


 */