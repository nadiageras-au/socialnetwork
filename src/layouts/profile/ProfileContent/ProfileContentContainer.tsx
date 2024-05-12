import React from 'react';
import {ProfileContent} from "./ProfileContent";
import {addPostActionCreator, changePostValueActionCreator, ProfileStateType} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
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



