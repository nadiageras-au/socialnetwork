import React, {ChangeEvent} from 'react';
import {MyPosts} from "../myPosts/MyPosts";

import {T_PostsData} from "../myPosts/post/Post";

export type ProfileProps = {
    posts: Array<T_PostsData>
    newValueForPost: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}
export const ProfileContent = ({addPost, updateNewPostText,newValueForPost, posts}: ProfileProps) => {
    const onAddPostHandler = () => {
        addPost()
    }
    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget.value)
    }
    return (
        <div>

             <MyPosts posts = {posts}/>
        </div>
    )
};

