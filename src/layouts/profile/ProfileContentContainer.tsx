import React from 'react';
import {ProfileContent} from "./ProfileContent";
import {addPostActionCreator, changePostValueActionCreator} from "../../redux/profilePage-reducer";
import {MainStateType} from "../../redux/store";
import {connect} from "react-redux";

let mapStateToProps = (state: MainStateType) => {
    return {
        posts: state.profilePage.posts,
        newValueForPost: state.profilePage.newValueForPost
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(changePostValueActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

export const ProfileContentContainer = connect(mapStateToProps,mapDispatchToProps)(ProfileContent)



