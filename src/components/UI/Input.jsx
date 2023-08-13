import React from "react";
import { styled } from "styled-components";

const Input = (props) => {
  return (
    <StyledInput
      width={props.width}
      height={props.height}
      placeholder="Enter new todo..."
      type={props.inputType}
      onChange={props.onChange}
      onClick={props.onClick}
    />
  );
};

const StyledInput = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: solid blue;
  &:focus {
    outline: none;
  }
`;

export default Input;
