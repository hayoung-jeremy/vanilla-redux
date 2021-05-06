import React, { useState } from "react";
import { connect } from "react-redux";
import { add } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    if (text !== "") {
      addToDo(text);
    } else {
      alert("메시지를 입력하세요");
    }
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>ADD</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} />
        ))}
      </ul>
    </>
  );
}

// mapStateToProps (state from store.js, ownProps from Component)
// redux store 에서 state 를 가져와서, 원하는 component 에 props 로 넣는 함수
function mapStateToProps(state) {
  return { toDos: state };
}

// mapDispatchToProps (store.dispatch, ownProps from Component)
function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(add(text)),
  };
}

// connect : connect (store 에서 state를 가져오는 함수, store 에 props 을 보내는 함수 )(Component)
export default connect(mapStateToProps, mapDispatchToProps)(Home);
