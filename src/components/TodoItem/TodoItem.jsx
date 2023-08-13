import React, { useContext, useState } from "react";
import { styled } from "styled-components";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { ContextProv } from "../ContextProvider/ContextProvider";
import Modal from "../Modal/Modal";
import { createPortal } from "react-dom";

const TodoItem = ({ todo }) => {
  const { deleteTodoHandler, setTodo } = useContext(ContextProv);
  const [isModal, setIsModal] = useState(false);
  const [isTodoCompleted, setIsTodoCompleted] = useState(!todo.completed);

  const changeModalState = () => {
    setIsModal((prevState) => !prevState);
  };

  const handleChecboxChange = () => {
    setIsTodoCompleted((prevState) => !prevState);
    
    setTodo((prevTodos) =>
    prevTodos.map((todoFromState) => {
      console.log(prevTodos)
      if (todoFromState.id === todo.id) {
        return { ...todoFromState, completed: !todoFromState.completed };
      }
      return todoFromState;
    })
  );
  };

  return (
    <StyledTodoItem>
      {isModal &&
        createPortal(
          <Modal
            todoId={todo.id}
            closeModalHandler={changeModalState}
            deleteTodoHandler={deleteTodoHandler}
          />,
          document.getElementById("modal")
        )}
      <TodoTitle isCompleted={isTodoCompleted}>{todo.title}</TodoTitle>
      <DeleteButtonAndCompleteButton>
        <Input
          width="30px"
          height="30px"
          inputType="checkbox"
          onClick={handleChecboxChange}
        />
        <Button
          bgColor="#FF5757"
          fontSize="16px"
          width="90px"
          height="30px"
          title="DELETE"
          onClick={changeModalState}
        />
      </DeleteButtonAndCompleteButton>
    </StyledTodoItem>
  );
};

const StyledTodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 60px;
  margin: 0 auto;
  margin-bottom: 20px;
  list-style: none;
  box-sizing: border-box;
  padding: 0px 40px;
  background-color: #1d93d2;
`;


const TodoTitle = styled.p`
  color: white;
  font-size: 20px;
  text-decoration: ${(props) => (props.isCompleted ? "none" : "line-through")};
`;

const DeleteButtonAndCompleteButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
`;
export default TodoItem;
