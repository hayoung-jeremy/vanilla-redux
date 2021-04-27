import { createStore } from "redux";
// store : data 저장소, state (data that changes) 저장소

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

// 2) create reducer : function that modifies the data in the store (only this function can)
// state = 0 : initial state value 설정
const countModifier = (state = 0) => {
  // return 하는것이 곧 data가 됨
  console.log(state);
  return state;
};

// 1) create store
const countStore = createStore(countModifier);

// console.log(countStore.getState) // --> state : reducer 가 return 하는 값, 즉 변화시킨 data 값을 가져옴
