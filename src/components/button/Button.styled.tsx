import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme.styled";

type ButtonPropsType = {
    title: string
}
export const Button = (props: ButtonPropsType) => {
    return (
        <StyledButton>{props.title}</StyledButton>

    );
};

const StyledButton = styled.button`
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  
  font-family: ${theme.fonts.Poppins};
  color:rgba(7, 27, 42, 1);

  font-size: 12px;
  font-weight: bold;
  cursor: pointer;`
