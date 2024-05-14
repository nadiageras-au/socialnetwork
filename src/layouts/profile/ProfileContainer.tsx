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
import {RouteComponentProps, withRouter} from "react-router-dom";
import {T_PostsData} from "./myPosts/post/Post";

// export type T_ProfileContainer = {
//     profile: T_ProfileInfo | null,
//     setUserProfile: (profile: T_ProfileInfo) => void
//     id?: string
// }

type PathParamsType = {
    userId?: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    profile: T_ProfileInfo | null
    posts: T_PostsData[]
    newValueForPost: string
}

type MapDispatchToPropsType = {
    changePostValueActionCreator:(text:string) => void
    addPostActionCreator:() => void
    setUserProfile:( profile: T_ProfileInfo)=>void
}

// class ProfileAPIComponent extends React.Component<T_ProfileContainer> {
class ProfileAPIComponent extends React.Component<PropsType> {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if(!userId) {
            userId="2"
        }
        axios.get
        (`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        // (`https://social-network.samuraijs.com/api/1.0/profile/31116`)
            .then(response => {
                debugger
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

let mapStateToProps = (state: AppStateType) : MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        newValueForPost: state.profilePage.newValueForPost
    }
}

let mapDispatchToProps : MapDispatchToPropsType =  {
    changePostValueActionCreator,
        addPostActionCreator,
        setUserProfile

}

let withUrlDataContainerComponent = withRouter(ProfileAPIComponent)
export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withUrlDataContainerComponent)


