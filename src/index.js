import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// action 정의
const addToDo = (text, liId) => {
  return { type: ADD_TODO, text, liId };
};
const deleteToDo = (id) => {
  return { type: DELETE_TODO, id };
};

const reducer = (state = [], action) => {
  // console.log(action);
  switch (action.type) {
    case ADD_TODO:
      // return state.push(action.text) : redux에서 이렇게 직접 데이터를 변경할 수는 없다
      // old[]의 contents 를 가져와서 new contents와 함께 new array 에 넣는다.
      // 만약 빈 input.value 를 가져왔을 경우엔 원래 state 를, 내용이 입력되었을 경우에만 업데이트된 state을 반환한다.
      return action.text !== ""
        ? [{ text: action.text, id: action.liId }, ...state]
        : state;
    case DELETE_TODO:
      // 닫기 버튼을 누른 li 의 id 를 제외하고, 나머지 li 들로 새 ul 을 만들어서 보여줌
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

// 정의한 action을 dipatch
const dispatchAddToDo = (text, liId) => {
  store.dispatch(addToDo(text, liId));
};

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  // 상태를 가져오는데 그건 새로 업데이트된 li 하나만 있는게 아니라 전체 ul 목록임
  // 그래서 계속해서 ul 이 painting 되기 때문에, 일단 ul을 비워두고 새 목록을 끼워넣음
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "✖";
    btn.addEventListener("click", dispatchDeleteToDo);
    // toDo.id 임 liId 가 아니라 (state 에 저장된 object 의 key 인 id 를 가져오는 것)
    li.id = toDo.id;
    li.innerText = toDo.text;
    ul.appendChild(li);
    li.appendChild(btn);
  });
};

store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  // 제출 시 해당 to do list에 새 아이디 부여
  const liId = Date.now();

  // 빈 input.value 가 아닐때만 제출
  if (toDo !== "") {
    dispatchAddToDo(toDo, liId);
  }
};

form.addEventListener("submit", onSubmit);
