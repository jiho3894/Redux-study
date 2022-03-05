import React, { useState } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
  console.log(toDos);
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText("");
  }
  return (
    <React.Fragment>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="write to do..."
          value={text}
          onChange={onChange}
        />
        <button>Add</button>
      </form>
      <ul></ul>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    toDos: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
