import React from 'react';
import {PostPropsType} from "./myPosts/post/Post";
import {addPostActionCreator, changePostValueActionCreator} from "../../redux/profilePage-reducer";
import {Profile} from "./Profile";
import {StoreContext} from "../../StoreContext";
import {useDispatch} from "react-redux";

export type ProfileStateProps = {
    newValueForPost: string
    posts: Array<PostPropsType>
}
export type ProfileProps = {
    // newValueForPost: string
    // posts: Array<PostPropsType>
    // dispatch: (action: any) => void
}
export const ProfileContainer = (props: ProfileProps) => {
    const dispatch = useDispatch()

    const addPost = () => {
        // props.dispatch(addPostActionCreator{type:ADD_POST,text: props.state.newValueForPost})
        dispatch(addPostActionCreator())
    }

    const onChangePostValueHandler = (text: string) => {
        dispatch(changePostValueActionCreator(text))
    }

    return (
        <StoreContext.Consumer>
            {
            (store)=> (
                <Profile updateNewPostText={onChangePostValueHandler}
                         addPost={addPost}
                         newValueForPost={store.getState().profilePage.newValueForPost}
                         posts={store.getState().profilePage.posts}/>
                )

        }
        </StoreContext.Consumer>

    );
};



