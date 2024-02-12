import React from 'react';
import styled from "styled-components";
import {DialogItem, DialogItemProps} from "./dialog/Dialog";
import {Message, MessageProps} from "./message/Message";
import {DialogsPageStateProps} from "../../App";

// type DialogsStateProps = {
//     dialogs: Array<DialogItemProps>
//     messages: Array<MessageProps>
// }
type DialogsProps = {
    state:DialogsPageStateProps
}
export const Dialogs = (props:DialogsProps) => {

    // let dialogsData = [
    //     {id:1, name: 'Chewbacca'},
    //     {id:2, name: 'R2d2'},
    //     {id:3, name: 'Luke'},
    //     {id:4, name: 'Leia'},
    //     {id:5, name: 'Jedi'},
    // ]
    //
    // let messsagesData = [
    //     {id:1, message: 'Hi!'},
    //     {id:2, message: 'How are you, bro?!'},
    //     {id:3, message: 'Yooo!'},
    //     {id:4, message: 'Cool!'},
    //
    // ]

    return (
        <StyledDialogs>
            <DialogsList>
                console.log(props.state.dialogs);
                {

                    props.state.dialogs.map(el=> {
                        return <DialogItem name={el.name} id={el.id} key={el.id}/>

                    })
                }



            </DialogsList>
            <Messages>
                {
                    props.state.messages.map(msg => {
                        return  <Message message={msg.message} key={msg.id} id={msg.id}/>
                    })
                }

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

