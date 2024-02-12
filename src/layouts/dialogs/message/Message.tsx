import React from 'react';
import styled from "styled-components";

export type MessageProps = {
    id:number
    message: string
}
export const Message:React.FC<MessageProps> = ({id,message}) => {
    return (
        <StyledMessage>
            {message}
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