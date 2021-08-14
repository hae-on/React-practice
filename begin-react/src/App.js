import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import "./App.css";
import Counter from "./Counter";

function App() {
  const name = "react";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24,
    padding: "1rem",
  };
  return (
    <>
      <Wrapper>
        <Hello name="react" color="red" isSpecial />
        <Hello color="pink" />
      </Wrapper>

      <div style={style}>{name}</div>
      {/* 주석 입력해보기 */}
      <div className="gray-box"></div>

      <Counter />
    </>
  );
}

export default App;
