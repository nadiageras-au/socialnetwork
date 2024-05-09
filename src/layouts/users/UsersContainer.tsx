import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unFollowAC} from "../../redux/usersPage-reducer";

const mapStateToProps = (state:any) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)