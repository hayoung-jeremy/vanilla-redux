import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

// actions :
const addToDo = (text, id) => {
  return {
    type: ADD,
    text,
    id: Date.now(),
  };
};
const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, { text: action.text, id: action.id }];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
