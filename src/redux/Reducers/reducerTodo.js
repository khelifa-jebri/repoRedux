import { ADD, DELETE, COMPLETE, EDIT, IS_DONE, IS_NOT_DONE, REFRESH } from "../Constants/actions-Types";
import { v4 as uuidv4 } from "uuid";

const InitialState = {
  tasksList: [
    {
      id: uuidv4(),
      description: "Go to Canada",
      isDone: false
    },
    {
      id: uuidv4(),
      description: "Playing Football",
      isDone: false
    },],
};

export const reducerTodo = (state = InitialState, { type, payload }) => {
  switch (type) {

    case ADD:
      return {
        tasksList:
          [...state.tasksList,
          { ...payload }]
      };

    case DELETE:
      return {
        ...state,
        tasksList: state.tasksList.filter((item) => item.id !== payload),
      };

    case COMPLETE:
      return {
        ...state,
        tasksList: state.tasksList.map((item) =>
          item.id === payload ? { ...item, isDone: !item.isDone } : item
        ),
      };

    case EDIT:
      return {
        ...state,
        tasksList: state.tasksList.map((item) =>
          item.id === payload.id ? { ...item, description: payload.description } : item
        ),
      };

    case IS_DONE:
      return {
        ...state,
        tasksList: state.tasksList.map(item => item).filter((item) => item.isDone === true),
      };

    case IS_NOT_DONE:
      return {
        ...state,
        tasksList: state.tasksList.map(item => item).filter((item) => item.isDone === false),
      };

    case REFRESH:
      return InitialState;

    default:
      return state;
  }
};
