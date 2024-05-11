import React, {ChangeEvent, useRef} from 'react';
import styled from "styled-components";
// import {AvatarImg, DialogItem, DialogItemProps} from "./dialog/Dialog";
// import {Message, MessageProps} from "./message/Message";
// import darth from "./../../assets/images/avatars/darth_vader_icon.png";
// import {ADD_MESSAGE, ON_CHANGE_MESSAGE_VALUE, ON_CHANGE_POST_VALUE} from "../../helpers/actionsTypes";
import {addMessageActionCreator, changeMessageValueActionCreator} from "../../redux/dialogsPage-reducer";
import {Dialogs} from "./Dialogs";
// import {StoreContext} from "../../StoreContext";
import {connect} from "react-redux";
import {MainStateType, T_DialogsPage} from "../../redux/store";
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

// export const DialogsContainer = () => {// old method to get store via 'context' usage
//
//     return <StoreContext.Consumer>
//         {
//         (store) => {
//             // const dispatch = useDispatch()
//             const onNewMessageChange = (text: string) => {
//                 store.dispatch(changeMessageValueActionCreator(text))
//             }
//             const onSendMsgClick = () => {
//                 store.dispatch(addMessageActionCreator(store.getState().dialogsPage.newMsg))
//             }
//
//            return <Dialogs
//                      newMsgValue={store.getState().dialogsPage.newMsg}
//                      dialogs={store.getState().dialogsPage.dialogs}
//                      messages={store.getState().dialogsPage.messages}
//                      updateNewMessageBody={onNewMessageChange}
//                      addMessage={onSendMsgClick}/>
//         }
//
//     }
//     </StoreContext.Consumer>
// };

let mapStateToProps = (state: MainStateType) => {

    return {
        newMsgValue: state.dialogsPage.newMsg,
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs
    }
}
let mapDispatchToProps = (dispatch: any) => {

    return {
        updateNewMessageBody: (text: string) => {
            dispatch(changeMessageValueActionCreator(text))
        },
        addMessage: (text:string) => {
            dispatch(addMessageActionCreator(text))
        }
    }
}
// store.getState().dialogsPage.newMsg
// const SuperDialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


