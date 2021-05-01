import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

// actions :
export const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};
export const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

let ID = Date.now();

const reducer = (state = [], action) => {
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

export default store;
