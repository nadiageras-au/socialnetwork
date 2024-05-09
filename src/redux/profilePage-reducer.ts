import {
    ActionsType,
    ADD_POST,
    ON_CHANGE_POST_VALUE
} from "../helpers/actionsTypes";
import {T_ProfilePage} from "./store";
import imgPost1 from "../assets/images/photos/post01.jpg";
import imgPost2 from "../assets/images/photos/post02.jpg";
import imgPost3_0 from "../assets/images/photos/post030.jpg";

const text1 = "Lock on to him, R2. Master, General Grievous's ship is directly ahead Master, General Grievous's ship is directly ahead the one crawling with vulture droids. I see it. Oh, this is going to be easy. Oddball, do you copy? Copy, Red Leader. It's only because I'm so in love. No, it's because I'm so in love with you. So love has blinded you? That's not exactly what I meant. But it's probably true."
const text2 = "Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. We don't want them here. Listen, why don't you wait out by the speeder. We don't want any trouble. I heartily agree with you sir. I suggest a new strategy, Artoo. Let the Wookiee win. Remember, a Jedi can feel the Force flowing through him. You mean it controls your actions? Partially. But it also obeys your commands. Hokey religions and ancient weapons are no match for a good blaster at your side, kid."
const text3 = "Captain. Yes, sir? Tell them we wish to board at once. With all due respect, the Ambassadors for the Supreme Chancellor wish to board immediately. Yes, yes, of course, as you know, our blockade is perfectly legal, and we'd be happy to receive the Ambassador. Noooo! No given up General Ja Ja. Wesa tink of sometin. Hands up! My giv up. My giv up. There's always a bigger fish. The invasion is on schedule, My Lord. I have the Senate bogged down in procedures. They will have no choice but to accept your control of the system."

let initialState = {
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
}

export const profilePageReducer = (state: T_ProfilePage = initialState, action: ActionsType): T_ProfilePage => {
    switch (action.type) {
        case ADD_POST : {
            let newPost = {
                id: 7,
                text: state.newValueForPost,
                media: '',
                postDateInfo: "1 hour ago",
                like: "0",
                comment: "0",
                share: "0"
            }
         return {...state,
                    newValueForPost : '',
                    posts : [ newPost, ...state.posts]
                }

        }
        case ON_CHANGE_POST_VALUE : {
            return  {...state,
                    newValueForPost: action.newText}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const changePostValueActionCreator = (text:string) => ({type: ON_CHANGE_POST_VALUE, newText: text })

