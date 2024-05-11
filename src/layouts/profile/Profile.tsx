import React, {ChangeEvent, forwardRef, useRef} from 'react';

import {PostPropsType} from "./myPosts/post/Post";
import {addPostActionCreator, changePostValueActionCreator} from "../../redux/profilePage-reducer";
import {ProfileTabPanel} from "./ProfileTabPanel/profileTabPanel";
import {ProfileContentContainer} from "./ProfileContentContainer";
import {AppStateType} from "../../redux/redux-store";

// export type ProfileStateProps = {
//     newValueForPost: string
//     posts: Array<PostPropsType>
// }
// export type ProfileProps = {
//     posts: Array<PostPropsType>
//     newValueForPost:string
//     addPost: ()=>void
//     updateNewPostText: (text:string)=>void
// }

export type ProfileProps = {

}
// export const Profile = ({addPost, updateNewPostText,newValueForPost, posts}: ProfileProps) => {
export const Profile = (props: ProfileProps) => {

    return (
        <div>
            <ProfileTabPanel/> {/* ProfileInfo*/}
            <ProfileContentContainer/> {/* Content - Posts, Photos & etc*/}

        </div>
    );
};

