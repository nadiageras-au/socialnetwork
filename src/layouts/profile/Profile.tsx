import React, {ChangeEvent, forwardRef, useRef} from 'react';

import {PostPropsType} from "./myPosts/post/Post";
import {addPostActionCreator, changePostValueActionCreator} from "../../redux/profilePage-reducer";
import {ProfileTabPanel} from "./ProfileTabPanel/profileTabPanel";
import {ProfileContentContainer} from "./ProfileContent/ProfileContentContainer";
import {AppStateType} from "../../redux/redux-store";
import {ProfileProps} from "./ProfileContent/ProfileContent";

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

// export const Profile = ({addPost, updateNewPostText,newValueForPost, posts}: ProfileProps) => {
export const Profile = (props: any) => {

    return (
        <div>
            <ProfileTabPanel/> {/* ProfileInfo*/}
            <ProfileContentContainer/> {/* Content - Posts, Photos & etc*/}

        </div>
    );
};

