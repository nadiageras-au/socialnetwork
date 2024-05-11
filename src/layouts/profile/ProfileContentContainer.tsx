import React, {ChangeEvent} from 'react';
import {ProfileContent} from "./ProfileTabPanel/ProfileContent";
import {PostPropsType} from "./myPosts/post/Post";
import {ADD_POST, ON_CHANGE_POST_VALUE} from "../../helpers/actionsTypes";
import {addPostActionCreator, changePostValueActionCreator} from "../../redux/profilePage-reducer";
import {AppStateType} from "../../redux/redux-store";

// export type ProfileStateProps = {
//     newValueForPost: string
//     posts: Array<PostPropsType>
// }
// export type ProfileProps = {
//     newValueForPost: string
//     posts: Array<PostPropsType>
//     dispatch: (action: any) => void
// }

export type ProfileProps = {
    store: any
}

export const ProfileContentContainer = (props:ProfileProps) => {
    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const onChangePostValueHandler = (text: string) => {
        props.store.dispatch(changePostValueActionCreator(text))
    }

    return (
        <ProfileContent posts={props.store.getState().profilePage.posts}
                        newValueForPost={props.store.getState().profilePage.newValueForPost}
                        addPost={addPost}
                        updateNewPostText={onChangePostValueHandler}/>
    );
};



