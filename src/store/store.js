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
