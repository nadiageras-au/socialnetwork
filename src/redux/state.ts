//import {PostPropsType} from "./../layouts/profile/myPosts/post/Post";
import imgPost1 from "./../assets/images/photos/post01.jpg";
import imgPost2 from "./../assets/images/photos/post02.jpg";
import imgPost3_0 from "./../assets/images/photos/post030.jpg";
//import imgPost3_1 from "../../../assets/images/photos/post031.jpg"
//avatars for dialogs authors
import chewbacca from "./../assets/images/avatars/chewbacca_icon.png";
import r2d2 from "./../assets/images/avatars/r2d2_droid_icon.png";
import luke from "./../assets/images/avatars/luke_skywalker.png";
import leia from "./../assets/images/avatars/leia_icon.png";
import yoda from "./../assets/images/avatars/yoda_icon.png";
//import {rerenderEntireTree} from "../render";
//import {MyPostsType} from "../layouts/profile/myPosts/MyPosts";
import {DialogItemProps} from "../layouts/dialogs/dialog/Dialog";
import {MessageProps} from "../layouts/dialogs/message/Message";
import {PostPropsType} from "../layouts/profile/myPosts/post/Post";
import {rerenderEntireTree} from "../index";
import {ADD_MESSAGE, ADD_POST, ON_CHANGE_MESSAGE_VALUE, ON_CHANGE_POST_VALUE} from "../helpers/actionsTypes";


export type MainStateType = {
    profilePage: {
        newValueForPost: string
        posts: Array<PostPropsType>
    }
    dialogsPage: {
        dialogs: Array<DialogItemProps>
        newMsg: string
        messages: Array<MessageProps>
    }
}

export type StoreType = {
    _state: MainStateType
    getState: () => MainStateType
    // onChangePostValue: (newText: string) => void
    // addPost: (postMsg: string) => void
    onChangeMsgValue: (newText: string) => void
     addMsg: (postMsg: string) => void
    subscribe: (observer: (state: MainStateType) => void) => void
    _callSubscriber: (state: MainStateType) => void
    dispatch: (action: any) => void
}


// export let state: MainStateType = {
//     profilePage: {
//         posts:[
//             {
//                 id: 1,
//                 text: text1,
//                 media: imgPost1,
//                 postDateInfo: "20 hours ago",
//                 like: "15",
//                 comment: "3",
//                 share: '18'
//             },
//             {id: 2,
//                 text: text2,
//                 media: imgPost2,
//                 postDateInfo: "3 days",
//                 like: "25", comment: "8",
//                 share: '1'},
//             {
//                 id: 3,
//                 text: text3 ,
//                 media: imgPost3_0,
//                 postDateInfo: "1 week",
//                 like: "38",
//                 comment: "10",
//                 share: '34'
//             },
//         ]
//     },
//     dialogsPage: {
//         dialogs:[
//             {id:1, name: 'Chewbacca', avatar: chewbacca},
//             {id:2, name: 'R2d2', avatar: r2d2},
//             {id:3, name: 'Luke', avatar: luke},
//             {id:4, name: 'Leia', avatar: leia},
//             {id:5, name: 'Yoda', avatar: yoda},
//         ],
//         messages: [
//             {id:1, message: 'Hi!'},
//             {id:2, message: 'How are you, bro?!'},
//             {id:3, message: 'Yooo!'},
//             {id:4, message: 'Cool!'},
//         ]
//     }
// }

const text1 = "Lock on to him, R2. Master, General Grievous's ship is directly ahead Master, General Grievous's ship is directly ahead the one crawling with vulture droids. I see it. Oh, this is going to be easy. Oddball, do you copy? Copy, Red Leader. It's only because I'm so in love. No, it's because I'm so in love with you. So love has blinded you? That's not exactly what I meant. But it's probably true."
const text2 = "Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. We don't want them here. Listen, why don't you wait out by the speeder. We don't want any trouble. I heartily agree with you sir. I suggest a new strategy, Artoo. Let the Wookiee win. Remember, a Jedi can feel the Force flowing through him. You mean it controls your actions? Partially. But it also obeys your commands. Hokey religions and ancient weapons are no match for a good blaster at your side, kid."
const text3 = "Captain. Yes, sir? Tell them we wish to board at once. With all due respect, the Ambassadors for the Supreme Chancellor wish to board immediately. Yes, yes, of course, as you know, our blockade is perfectly legal, and we'd be happy to receive the Ambassador. Noooo! No given up General Ja Ja. Wesa tink of sometin. Hands up! My giv up. My giv up. There's always a bigger fish. The invasion is on schedule, My Lord. I have the Senate bogged down in procedures. They will have no choice but to accept your control of the system."


export let store: StoreType = {
    _state: {
        profilePage: {
            newValueForPost: '',
            posts: [
                {
                    id: 1,
                    text: text1,
                    media: imgPost1,
                    postDateInfo: "20 hours ago",
                    like: "15",
                    comment: "3",
                    share: '18'
                },
                {
                    id: 2,
                    text: text2,
                    media: imgPost2,
                    postDateInfo: "3 days",
                    like: "25", comment: "8",
                    share: '1'
                },
                {
                    id: 3,
                    text: text3,
                    media: imgPost3_0,
                    postDateInfo: "1 week",
                    like: "38",
                    comment: "10",
                    share: '34'
                },
            ]
        },
        dialogsPage: {
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
    },
    _callSubscriber(state: MainStateType) {
    },
    getState() {
        return this._state
    },
    onChangeMsgValue(newText: string) {
        //debugger;
        console.log(this._state.dialogsPage.newMsg)
        this._state.dialogsPage.newMsg = newText;
        this._callSubscriber(this._state)
    },
    addMsg(postMsg: string) {
        let newMsg = {
            id: 101, message: postMsg
        }
        this._state.dialogsPage.messages.unshift(newMsg);
        this._state.dialogsPage.newMsg = ''
        this._callSubscriber(this._state)
    },
    subscribe(observer: (state: MainStateType) => void) {
        this._callSubscriber = observer
    },
    dispatch(action: any) {
        if (action.type === ADD_POST) {
            console.log('add post worked')
            let newPost = {
                id: 7,
                text: action.text,
                media: '',
                postDateInfo: "1 hour ago",
                like: "0",
                comment: "0",
                share: "0"
            }
            this._state.profilePage.posts.unshift(newPost);
            this._state.profilePage.newValueForPost = ''

        } else  if (action.type === ON_CHANGE_POST_VALUE) {
            console.log(this._state.profilePage.newValueForPost)
            this._state.profilePage.newValueForPost = action.newText;

        } else  if (action.type === ADD_MESSAGE) {
            let newMsg = {
                id: 101, message: this._state.dialogsPage.newMsg
            }
            this._state.dialogsPage.messages.unshift(newMsg);
            this._state.dialogsPage.newMsg = ''

        } else  if (action.type === ON_CHANGE_MESSAGE_VALUE) {
            console.log(this._state.dialogsPage.newMsg)
            this._state.dialogsPage.newMsg = action.text;
        }

        this._callSubscriber(this._state)
    }
}

//window.store = store

