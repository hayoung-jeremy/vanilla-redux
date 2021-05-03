import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

// actions :
const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};
const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const reducer = (state = [], action) => {
  let ID = Date.now();
  switch (action.type) {
    case ADD:
      return [...state, { text: action.text, id: ID }];
    case DELETE:
      return state.filter((toDo) => toDo !== action.id);
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
