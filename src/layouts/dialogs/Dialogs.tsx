import React from 'react';
import styled from "styled-components";
import {DialogItem} from "./dialog/Dialog";
import {Message} from "./message/Message";

export const Dialogs = () => {
    return (
        <StyledDialogs>
            <DialogsList>
                <DialogItem name="Chewbacca" id="1"/>
                <DialogItem name="R2d2" id="2"/>
                <DialogItem name="Luke" id="3"/>
                <DialogItem name="Leia" id="4"/>
                <DialogItem name="Jedi" id="5"/>

            </DialogsList>
            <Messages>
                <Message text="Hi!"/>
                <Message text="How are you, bro?!"/>
                <Message text="Yo!"/>
                <Message text="Cool!"/>
            </Messages>
        </StyledDialogs>
    );
};

const StyledDialogs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const DialogsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 15px;
  width: 25%;
  max-width: 250px;
  background-color: #f9fdb3;
`

const Dialog = styled.div`
  font-size: 20px;
  color: cornflowerblue;
  border: 1px solid forestgreen;
  background-color: #fffdf1;
`

const Messages = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 30px;
  background-color: #f9e0ff;
  width: 70%;
`

