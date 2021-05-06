// import { createStore } from "redux";
import {
  // createAction,
  // createReducer,
  configureStore,
  createSlice,
} from "@reduxjs/toolkit";

// actions :
// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

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
// const reducer = createReducer([], {
//   // 또한, 아래처럼 state 을 직접 mutate 할 수도 있고, {}
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   // 아니면, 이전처럼 새로운 state 을 return 할 수도 있다. w/o {}
//   [deleteToDo]: (state, action) =>
//     state.filter((toDo) => toDo.id !== action.payload),
// });

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

export const { add, remove } = toDos.actions;

// redux dev tools 를 사용하여 state, action, dispatch 등 여러가지를 확인할 수 있음
export default configureStore({ reducer: toDos.reducer });
