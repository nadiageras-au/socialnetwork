import React from 'react';
import {connect} from "react-redux";
import {
    followAC,
    initialState_T,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    User_T
} from "../../redux/usersPage-reducer";
import Users from "./UsersAPIComponent";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import UsersAPIComponent from "./UsersAPIComponent";



type mapDispatchToProps_T = {
    follow: (userId: number)=>void
    unfollow:(userId: number)=>void
    setUsers:(users:Array<User_T>)=>void
    setCurrentPage: (currentPageNumber: number) => void
    setTotalUsersCount: (totalCount:number)=> void
}

type MapStateToProps_T = {
    users: Array<User_T>
    pageSize: number
    totalCount: number
    currentPage: number
}

// type MapStateToProps_T = {
//     users: initialState_T // это если users: state.usersPage
// }

export type UsersPropsType = MapStateToProps_T & mapDispatchToProps_T

const mapStateToProps = (state: AppStateType): MapStateToProps_T => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (currentPageNumber: number) => {
            dispatch(setCurrentPageAC(currentPageNumber))
        },
        setTotalUsersCount: (totalCount:number)=> {
            dispatch(setTotalUsersCountAC(totalCount))
        }

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)