import {
    addPostActionCreator,
    changePostValueActionCreator,
    setUserProfile,
    T_ProfileInfo
} from "../../redux/profileReducer";
import {Profile} from "./Profile";
import {connect, useDispatch} from "react-redux";
import axios from "axios";
import React from "react";
import {AppStateType} from "../../redux/redux-store";

export type T_ProfileContainer = {
    profile: T_ProfileInfo | null,
    setUserProfile: (profile: T_ProfileInfo) => void
    id?: string
}

class ProfileAPIComponent extends React.Component<T_ProfileContainer> {

    componentDidMount() {
        axios.get
        (`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                // this.props.toggleIsFetching(false)
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
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        newValueForPost: state.profilePage.newValueForPost
    }
}

let mapDispatchToProps =  {
    changePostValueActionCreator,
        addPostActionCreator,
        setUserProfile

}


export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileAPIComponent)


