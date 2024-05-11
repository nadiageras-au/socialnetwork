
import {
    addMessageActionCreator,
    changeMessageValueActionCreator,
    DialogsStateType
} from "../../redux/dialogsPage-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";

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

let mapStateToProps = (state: AppStateType) => {

    return {
        newMsgValue: state.dialogsPage.newMsg ,
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {

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


