import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoCreate from "./components/todoCreate";
import TodoHead from "./components/todoHead";
import TodoList from "./components/todoList";
import TodoTemplate from "./components/todoTemplate";
import { TodoProvider } from "./todoContext";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
