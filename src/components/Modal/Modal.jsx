import React from "react";
import { styled } from "styled-components";
import Button from "../UI/Button";

const Modal = ({ todoId, closeModalHandler, deleteTodoHandler }) => {
  return (
    <>
    <StyledBackdrop onClick={closeModalHandler}></StyledBackdrop>
      <StyledModal>
        <AcceptOrNotTitle>Вы уверены, что хотите удалить эту задачу?</AcceptOrNotTitle>
        <ConfirmAndCancelButtons>
            <Button borderRadius="15px" onClick={() => deleteTodoHandler(todoId)} bgColor="green" title="да"/>
            <Button borderRadius="15px" onClick={closeModalHandler} bgColor="red" title="отмена"/>
        </ConfirmAndCancelButtons>
      </StyledModal>
    </>
  );
};

const StyledBackdrop = styled.div`
    position: fixed;
    z-index: 10;

    width: 100%;
    height: 100vh;

    top: 0;
    left: 0;
    
    background-color: black;
    opacity: 80%;
`

const StyledModal = styled.div`
    position: fixed;
    z-index: 20;
    left: 30%;
    top: 15%;
    text-align: center;
    background-color: white;
    border: solid blue;
    padding: 30px;
    width: 350px;
    height: 250px;
    border-radius: 29px;
`;

const AcceptOrNotTitle = styled.h2`
    color: blue;
`

const ConfirmAndCancelButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 70px;
    width: 80%;
`
export default Modal;
