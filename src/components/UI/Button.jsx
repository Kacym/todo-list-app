import React from "react";
import { styled } from "styled-components";

const Button = (props) => {
  return (
    <StyledButton borderRadius={props.borderRadius} fontSize={props.fontSize} height={props.height} width={props.width} bgColor={props.bgColor} onClick={props.onClick}>
      {props.title}
    </StyledButton>
  );
};

const StyledButton = styled.button`
    background-color: ${(props) => props.bgColor || "green"};
    width: ${(props) => props.width || "100px"};
    height: ${(props) => props.height || "47px"};
    font-size: ${(props) => props.fontSize || "20px"};
    border-radius: ${(props) => props.borderRadius || "25px"};
    cursor: pointer;
    border: none;
    color: white;
`;

export default Button;
