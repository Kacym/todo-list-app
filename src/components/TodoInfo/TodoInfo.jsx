import React, { useContext } from "react";
import { styled, css } from "styled-components";
import MoonIcon from "../../images/moon-icon.png";
import SunIcon from "../../images/sun-icon.png"
import { ContextProv } from "../ContextProvider/ContextProvider";

const TodoInfo = () => {
  const { todo, isThemeChanged, changedThemeHandler } = useContext(ContextProv);
  const totalTask = todo.length
  const completedTask = todo.filter((tod) => !tod.completed).length
  const notCompletedTask = totalTask - completedTask


  return (
    <StyledTodoInfo isThemeChanged={isThemeChanged}>
      <TotalTask>Всего: {totalTask} </TotalTask>
      <NotCompletedTasks>Невыполенные: {completedTask}</NotCompletedTasks>
      <CompletedTasks>Выполненные: {notCompletedTask} </CompletedTasks>
      <img src={isThemeChanged ? SunIcon : MoonIcon} alt="moon" width="30px" height="30px" onClick={changedThemeHandler} />
    </StyledTodoInfo>
  );
};

const StyledTodoInfo = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;

  width: 70%;

  margin: 0 auto;
  padding: 0px 50px;
  gap: 50px;
  background-color: white;
  border-radius: 15px;

  ${props => (props.isThemeChanged ? darkThemeStyles : lightThemeStyles)}
`;

const TotalTask = styled.h2`
  color: blue;
  width: 25%;
`;

const NotCompletedTasks = styled.h2`
  color: red;
  width: 25%;
`;

const CompletedTasks = styled.h2`
  color: green;
  width: 25%;
`;

const lightThemeStyles = css`
  background-color: white;
  color: black;
`;

const darkThemeStyles = css`
  background-color: #002B64;
  color: white;
`;

export default TodoInfo;
