import React from 'react';
import {PostPropsType} from "./myPosts/post/Post";
import {addPostActionCreator, changePostValueActionCreator} from "../../redux/profilePage-reducer";
import {Profile} from "./Profile";

export type ProfileStateProps = {
    newValueForPost: string
    posts: Array<PostPropsType>
}
export type ProfileProps = {
    newValueForPost: string
    posts: Array<PostPropsType>
    dispatch: (action:any) => void
}
export const ProfileContainer = (props: ProfileProps) => {

    const addPost = () => {
        // props.dispatch(addPostActionCreator{type:ADD_POST,text: props.state.newValueForPost})
        props.dispatch(addPostActionCreator())
    }

    const onChangePostValueHandler = (text:string) => {
        props.dispatch(changePostValueActionCreator(text))
    }

    return (
       <Profile updateNewPostText={onChangePostValueHandler}
                addPost={addPost}
                newValueForPost={props.newValueForPost}
       posts={props.posts}/>
    );
};



