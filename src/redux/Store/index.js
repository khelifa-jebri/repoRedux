import { createStore } from "redux";
import { reducerTodo } from '../Reducers/reducerTodo'

const store = createStore(
  reducerTodo,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;