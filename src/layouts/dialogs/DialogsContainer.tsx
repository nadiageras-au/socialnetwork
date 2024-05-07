import React, {ChangeEvent, useRef} from 'react';
import styled from "styled-components";
import {AvatarImg, DialogItem, DialogItemProps} from "./dialog/Dialog";
import {Message, MessageProps} from "./message/Message";
import darth from "./../../assets/images/avatars/darth_vader_icon.png";
import {ADD_MESSAGE, ON_CHANGE_MESSAGE_VALUE, ON_CHANGE_POST_VALUE} from "../../helpers/actionsTypes";
import {addMessageActionCreator, changeMessageValueActionCreator} from "../../redux/dialogsPage-reducer";

export type DialogsStateProps = {
    dialogs: Array<DialogItemProps>
    messages: Array<MessageProps>
    newMsg: string

}
export type DialogsProps = {
    state: DialogsStateProps
    dispatch: (action: any) => void
}
export const Dialogs = ({state, dispatch}: DialogsProps) => {

    let dialogsElements = state.dialogs.length
        ? state.dialogs.map(el => {
        return <DialogItem name={el.name} id={el.id} key={el.id} avatar={el.avatar}/>
    })
        : <div>No Dialogs Yet</div>
    let messagesElements = state.messages.length
    ? state.messages.map(msg => {
        return <>
            <AvatarImg src={darth} height='50px' width='50px'/>
            <Message message={msg.message} key={msg.id} id={msg.id}/>
        </>
    })
        : <div>No Messages yet</div>


    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // dispatch({type: ON_CHANGE_MESSAGE_VALUE, text: e.currentTarget.value})
        dispatch(changeMessageValueActionCreator(e.currentTarget.value))
    }

    const onSendMsgClick = () => {
        // dispatch({type: ADD_MESSAGE})
        dispatch(addMessageActionCreator(state.newMsg))
    }

    return (
        <StyledDialogs>
            <DialogsList>
                {dialogsElements}
            </DialogsList>
            <FlexWrapperDialogs>
                <Messages>
                    {messagesElements}
                </Messages>
                <textarea
                    onChange={onNewMessageChange}
                    placeholder={'Enter your message'}></textarea>
                <button onClick={onSendMsgClick}>Send</button>
            </FlexWrapperDialogs>
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
export const FlexWrapperDialogs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
  padding: 20px;
  width: 100%;
`
