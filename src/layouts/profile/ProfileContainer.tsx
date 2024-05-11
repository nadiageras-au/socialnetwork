import React from 'react';
import {setUserProfile} from "../../redux/profilePage-reducer";
import {Profile} from "./Profile";
import {connect, useDispatch} from "react-redux";
import axios from "axios";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";


export type ProfileResponseType = {
    aboutMe: string
    contacts: {
        facebook: null | string
        website: null | string
        vk: null | string
        twitter: null | string
        instagram: null | string
        youtube: null | string
        github: null | string
        mainLink: null | string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

class ProfileAPIComponent extends React.Component<any> {

    componentDidMount() {
        axios.get<ProfileResponseType>
        (`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        // return <Profile posts={this.props.posts}
        //                 newValueForPost={this.props.newValueForPost}
        //                 addPost={this.props.addPost}
        //                 updateNewPostText={this.props.updateNewPostText}/>
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state: AppStateType) => {

    return {
        // posts: state.profilePage.posts,
        // newValueForPost: state.profilePage.newValueForPost
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {

    return {
        // updateNewPostText: (text: string) => {
        //     dispatch(changePostValueActionCreator(text))
        // },
        // addPost: () => {
        //     dispatch(addPostActionCreator())
        // }
    }

}


export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileAPIComponent)



