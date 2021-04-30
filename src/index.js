import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  // console.log(action);
  switch (action.type) {
    case ADD_TODO:
      // return state.push(action.text) : redux에서 이렇게 직접 데이터를 변경할 수는 없다
      // old[]의 contents 를 가져와서 new contents와 함께 new array 에 넣는다.
      // 만약 빈 input.value 를 가져왔을 경우엔 원래 state 를, 내용이 입력되었을 경우에만 업데이트된 state을 반환한다.
      return action.text !== ""
        ? [...state, { text: action.text, id: action.liId }]
        : state;
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const paintToDos = () => {
  const toDos = store.getState();
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    li.id = toDo.liId;
    li.innerText = toDo.text;
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const addToDo = (text, liId) => {
  store.dispatch({ type: ADD_TODO, text, liId });
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  // 제출 시 해당 to do list에 새 아이디 부여
  const liId = Date.now();
  addToDo(toDo, liId);
};

form.addEventListener("submit", onSubmit);
