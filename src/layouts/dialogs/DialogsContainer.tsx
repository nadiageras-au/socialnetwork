import React, {ChangeEvent, useRef} from 'react';
import styled from "styled-components";
import {AvatarImg, DialogItem, DialogItemProps} from "./dialog/Dialog";
import {Message, MessageProps} from "./message/Message";
import darth from "./../../assets/images/avatars/darth_vader_icon.png";
import {ADD_MESSAGE, ON_CHANGE_MESSAGE_VALUE, ON_CHANGE_POST_VALUE} from "../../helpers/actionsTypes";
import {addMessageActionCreator, changeMessageValueActionCreator} from "../../redux/dialogsPage-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";
// import {useDispatch} from "react-redux";

// export type DialogsStateProps = {
//     dialogs: Array<DialogItemProps>
//     messages: Array<MessageProps>
//     newMsg: string
//
// }
// export type DialogsProps = {
//     // state: DialogsStateProps
//     // dispatch: (action: any) => void
// }
export const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
        (store) => {
            // const dispatch = useDispatch()
            const onNewMessageChange = (text: string) => {
                store.dispatch(changeMessageValueActionCreator(text))
            }
            const onSendMsgClick = () => {
                store.dispatch(addMessageActionCreator(store.getState().dialogsPage.newMsg))
            }

           return <Dialogs newMsgValue={store.getState().dialogsPage.newMsg}
                     dialogs={store.getState().dialogsPage.dialogs}
                     messages={store.getState().dialogsPage.messages}
                     updateNewMessageBody={onNewMessageChange}
                     addMessage={onSendMsgClick}/>
        }

    }
    </StoreContext.Consumer>
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

