import React from 'react';
import {connect} from "react-redux";
import {followAC, initialState_T, setUsersAC, unFollowAC, User_T} from "../../redux/usersPage-reducer";
import Users from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";



type mapDispatchToProps_T = {
    follow: (userId: number)=>void
    unfollow:(userId: number)=>void
    setUsers:(users:Array<User_T>)=>void
}

type MapStateToProps_T = {
    users: Array<User_T>
}

// type MapStateToProps_T = {
//     users: initialState_T // это если users: state.usersPage
// }

export type UsersPropsType = MapStateToProps_T & mapDispatchToProps_T

const mapStateToProps = (state: AppStateType): MapStateToProps_T => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch) :mapDispatchToProps_T => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<User_T>) => {
            dispatch(setUsersAC(users))
        }

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)