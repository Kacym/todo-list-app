import { css, styled } from "styled-components";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoInfo from "./components/TodoInfo/TodoInfo";
import { ContextProv } from "./components/ContextProvider/ContextProvider";
import TodoItem from "./components/TodoItem/TodoItem";
import { useContext } from "react";

function App() {
  const { todo, isThemeChanged } = useContext(ContextProv);
  return (
    <div className="App">
      <TodoInfo />
      <TodoContainer>
        <TodoForm />
        <ul isThemeChanged={isThemeChanged} style={{ padding: 0 }}>
          {todo.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </ul>
      </TodoContainer>
    </div>
  );
}

const TodoContainer = styled.div`
  width: 70%;
  background-color: white;

  margin: auto;
  margin-top: 20px;

  padding-top: 3px;
  padding-bottom: 30px;

  border-radius: 15px;

  ${props => (props.isThemeChanged ? darkThemeStyles : lightThemeStyles)}
`;

const darkThemeStyles = css`
  background-color: "blue"
`

const lightThemeStyles = css`
  background-color: white
`

export default App;
