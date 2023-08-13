import React, { useContext, useReducer } from "react";
import { styled } from "styled-components";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { ContextProv } from "../ContextProvider/ContextProvider";
import { useEffect } from "react";

const GET_INPUT_VALUE = "GET_INPUT_VALUE";

const initialState = {
  inputValue: ""
}

const reducerFunc = (state, action) => {
  switch(action.type) {
    case GET_INPUT_VALUE : {
      return {
        ...state,
        inputValue: action.payload
      }
    }
    default: {
      return state
    }
  }
}

const TodoForm = () => {
  const { todo, setTodo } = useContext(ContextProv);

  const [state, dispatch] = useReducer(reducerFunc, initialState);

  useEffect(() => {
    // Сохранение задач в localStorage при изменении todo
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);


  const addNewTodo = (e) => {
    if(state.inputValue) {
      const newTodo = {
        title: state.inputValue,
        completed: false,
        id: Math.floor(Math.random() * 100000)
      }
     setTodo([...todo, newTodo])
    }
    e.preventDefault()
    
  }

  const getInputValue = (e) => {
    dispatch({type: GET_INPUT_VALUE, payload: e.target.value});
    
  }
  // console.log(initialState.inputValue);
  
  return (
    <>
      <HeadTitle>todo-list</HeadTitle>
      <StyledTodoForm>
        <Input onChange={getInputValue} width="350px" height="40px" inputType="text"/>
        <Button onClick={addNewTodo} bgColor="#E2306C" title="ADD" />
      </StyledTodoForm>
    </>
  );
};

const StyledTodoForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const HeadTitle = styled.h1`
  color: blue;
  text-transform: uppercase;
`;
export default TodoForm;
