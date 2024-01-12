import React from 'react';
import styled from "styled-components";

type MessageProps = {
    text: string
}
export const Message:React.FC<MessageProps> = ({text}) => {
    return (
        <StyledMessage>
            {text}
        </StyledMessage>
    );
};


const StyledMessage = styled.div`
  &:nth-child(2n) {
    background-color: #f4f8b5;
    text-align: end;
  }

  &:nth-child(odd) {
    background-color: #d7fafd;
    width: 70%;
    max-width: 400px;
    text-align: start;
  }
`