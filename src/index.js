import { createStore } from "redux";
// store : data 저장소, state (data that changes) 저장소

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

// action types :
const ADD = "ADD";
const MINUS = "MINUS";

// 2) create reducer : function that modifies the data in the store (only this function can)
// state = 0 : initial state value 설정
// action : data를 변형시키는 함수
const countModifier = (count = 0, action) => {
  // 여기서 count 는 current count
  console.log("current count : " + count, action);
  // 전달받은 action이 무엇인지에 따라 데이터를 어떻게 변경할 지 작성
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

// 1) create store
const countStore = createStore(countModifier);

const onChange = () => {
  console.log(countStore.getState());
  number.innerText = countStore.getState();
};

// 4) subscribe : store의 data 변화를 알아낼수 있게 해준다
// store 에 저장된 data에 변화가 생길때마다 감지해서 ()안의 function 실행해줌
countStore.subscribe(onChange);

// 3) dipatch() 를 사용하여 action을 만들 수 있음 () 는 항상 object여야함
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "MINUS" });

// console.log(countStore.getState) // --> state : reducer 가 return 하는 값, 즉 변화시킨 data 값을 가져옴

add.addEventListener("click", () => {
  countStore.dispatch({ type: ADD });
});
minus.addEventListener("click", () => {
  countStore.dispatch({ type: MINUS });
});
