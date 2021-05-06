import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

// actions :
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       console.log(action);
//       return [...state, { text: action.payload, id: action.id }];
//     case deleteToDo.type:
//       console.log(action);
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// redux toolkit : state 을 mutate 하는것이 가능해짐
// 이는 immer 때문
const reducer = createReducer([], {
  // 또한, 아래처럼 state 을 직접 mutate 할 수도 있고, {}
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  // 아니면, 이전처럼 새로운 state 을 return 할 수도 있다. w/o {}
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
});

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
