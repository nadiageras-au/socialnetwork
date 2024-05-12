import {
    ActionsType,
    ADD_MESSAGE,
    ON_CHANGE_MESSAGE_VALUE,
} from "../helpers/actionsTypes";
import chewbacca from "../assets/images/avatars/chewbacca_icon.png";
import r2d2 from "../assets/images/avatars/r2d2_droid_icon.png";
import luke from "../assets/images/avatars/luke_skywalker.png";
import leia from "../assets/images/avatars/leia_icon.png";
import yoda from "../assets/images/avatars/yoda_icon.png";
import {DialogItemProps} from "../layouts/dialogs/dialog/Dialog";
import {MessageProps} from "../layouts/dialogs/message/Message";
// export type DialogsType = {
//     id: number
//     name: string
//     avatar: string
// }

let initialState = {
    dialogs: [
        {id: 1, name: 'Chewbacca', avatar: chewbacca},
        {id: 2, name: 'R2d2', avatar: r2d2},
        {id: 3, name: 'Luke', avatar: luke},
        {id: 4, name: 'Leia', avatar: leia},
        {id: 5, name: 'Yoda', avatar: yoda},
    ],
    newMsg: '',
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you, bro?!'},
        {id: 3, message: 'Yooo!'},
        {id: 4, message: 'Cool!'},
    ]
}

export type DialogsStateType = {
    dialogs: Array<DialogItemProps>
    newMsg: string
    messages: Array<MessageProps>
}

export const dialogsReducer = (state: DialogsStateType = initialState, action: ActionsType): DialogsStateType => {

    switch (action.type) {
        case ADD_MESSAGE : {
            return  {
                ...state,
                newMsg: '',
                messages: [...state.messages,
                    {id: 101, message: action.message}]
            };
        }
        case ON_CHANGE_MESSAGE_VALUE : {
            return {...state, newMsg: action.msgValue};
        }
        default:
            return state;
    }
}
export const addMessageActionCreator = (message: string) => ({type: ADD_MESSAGE, message} as const)
export const changeMessageValueActionCreator = (text: string) => ({
    type: ON_CHANGE_MESSAGE_VALUE,
    msgValue: text
} as const)


