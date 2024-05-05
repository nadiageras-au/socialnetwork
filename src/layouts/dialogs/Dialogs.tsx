import React, {ChangeEvent, useRef} from 'react';
import styled from "styled-components";
import {AvatarImg, DialogItem, DialogItemProps} from "./dialog/Dialog";
import {Message, MessageProps} from "./message/Message";
// import {DialogsPageStateProps} from "../../App";
//заглушка
import darth from "./../../assets/images/avatars/darth_vader_icon.png";
import {FlexWrapper} from "../../components/wrappers/FlexWrapper";
import {ADD_MESSAGE, ON_CHANGE_MESSAGE_VALUE, ON_CHANGE_POST_VALUE} from "../../helpers/actionsTypes";


// export type DialogsPageStateProps = {
//     dialogs:Array<DialogItemProps>
//     messages: Array<MessageProps>
// }
export type DialogsStateProps = {
    dialogs: Array<DialogItemProps>
    messages: Array<MessageProps>

}
export type DialogsProps = {
    state:DialogsStateProps
    // addMsg: ()=>void
    // onChangeMsgValue: ()=>void
    dispatch: (action:any) => void
}
export const Dialogs = ({state, dispatch}:DialogsProps) => {

    //let newPostElement = useRef<HTMLTextAreaElement>(null);
    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        dispatch({type:ON_CHANGE_MESSAGE_VALUE, text: e.currentTarget.value})
        // if (newPostElement.current !== null) {
        //     alert(newPostElement.current.value)
        //     // alert(newPostElement.current.resizableTextArea.textArea.value)
        // }
    }

    const onSendMsgClick = () => {
      dispatch({type:ADD_MESSAGE})
    }

    return (
        <StyledDialogs>
            <DialogsList>
                {
                    state.dialogs.map(el=> {
                        return <DialogItem name={el.name} id={el.id} key={el.id} avatar={el.avatar}/>
                    })
                }
            </DialogsList>
            <FlexWrapperDialogs>
                <Messages>
                    {
                        state.messages.map(msg => {

                            return <>
                                {/*<AvatarImg src={state.dialogs.filter((el) => {*/}
                                {/*    el.id === msg.id ? el.avatar : darth*/}
                                {/*})} height='50px' width='50px'/>*/}

                                <AvatarImg src={darth} height='50px' width='50px'/>
                                <Message message={msg.message} key={msg.id} id={msg.id}/>
                            </>
                        })
                    }

                </Messages>
                {/*<textarea ref={newPostElement}></textarea>*/}
                <textarea
                    // value={newMessageBody}
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

