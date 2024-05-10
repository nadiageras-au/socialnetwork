import React from 'react';
import {PostPropsType} from "./myPosts/post/Post";
import {addPostActionCreator, changePostValueActionCreator} from "../../redux/profilePage-reducer";
import {Profile} from "./Profile";
import {StoreContext} from "../../StoreContext";
import {connect, useDispatch} from "react-redux";
import {MainStateType, T_ProfilePage} from "../../redux/store";
import axios from "axios";
import {User_T} from "../../redux/usersPage-reducer";

type Response<T = {}> = {
    aboutMe: string
    contacts: {
        facebook: null| string
        website: null| string
        vk: null| string
        twitter: null| string
        instagram: null| string
        youtube: null| string
        github: null| string
        mainLink:null| string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
    // items: T[]
    // error: null | any
    // totalCount: number
}
class ProfileAPIComponent extends React.Component<any> {

    componentDidMount() {
        axios.get<Response>
        (`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <div></div>
    }
}

let mapStateToProps = (state:MainStateType) => {

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


export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileAPIComponent)



