import React, {ChangeEvent, forwardRef, useRef} from 'react';

import {PostPropsType} from "./myPosts/post/Post";
import {addPostActionCreator, changePostValueActionCreator} from "../../redux/profilePage-reducer";
import {ProfileTabPanel} from "./ProfileTabPanel/profileTabPanel";
import {ProfileContentContainer} from "./ProfileContentContainer";

export type ProfileStateProps = {
    newValueForPost: string
    posts: Array<PostPropsType>
}
export type ProfileProps = {
    posts: Array<PostPropsType>
    newValueForPost:string
    addPost: ()=>void
    updateNewPostText: (text:string)=>void
}
export const Profile = ({addPost, updateNewPostText,newValueForPost, posts}: ProfileProps) => {

    // name="post-text"
    return (
        <div>
            <ProfileTabPanel/> {/* ProfileInfo*/}
            <ProfileContentContainer/> {/* Content - Posts, Photos & etc*/}

        </div>
    );
};

// const ProfileAvatar = styled(Image)`
// border-radius: 50px;
// max-width: 100px;
// height: 100%;
//
// `
