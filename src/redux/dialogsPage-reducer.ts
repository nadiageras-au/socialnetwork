import {
    ActionsType,
    ADD_MESSAGE,
    ON_CHANGE_MESSAGE_VALUE,
} from "../helpers/actionsTypes";
import {T_DialogsPage, T_ProfilePage} from "./store";
import chewbacca from "../assets/images/avatars/chewbacca_icon.png";
import r2d2 from "../assets/images/avatars/r2d2_droid_icon.png";
import luke from "../assets/images/avatars/luke_skywalker.png";
import leia from "../assets/images/avatars/leia_icon.png";
import yoda from "../assets/images/avatars/yoda_icon.png";

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

export const dialogsPageReducer = (state: T_DialogsPage = initialState, action: ActionsType): T_DialogsPage => {
    switch (action.type) {
        case ADD_MESSAGE : {
            let newMsg = {
                id: 101, message: action.message
            }
           state.messages.unshift(newMsg);
            state.newMsg = ''
            return state;
        }
        case ON_CHANGE_MESSAGE_VALUE : {
            state.newMsg = action.msgValue;
            return state;
        }
        default:
            return state;
    }
}
export const addMessageActionCreator = (message:string) => ({type: ADD_MESSAGE, message })
export const changeMessageValueActionCreator = (text:string) => ({type: ON_CHANGE_MESSAGE_VALUE, msgValue: text })


