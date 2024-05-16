import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleFollowingInProgress, toggleIsFetching,
    unfollow,
    User_T
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../../components/preloader/Preloader";
import {usersAPI} from "../../api/api";

type mapDispatchToProps_T = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<User_T>) => void
    setCurrentPage: (currentPageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void

}

type MapStateToProps_T = {
    users: Array<User_T>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

export type UsersPropsType = MapStateToProps_T & mapDispatchToProps_T

class UsersAPIComponent extends React.Component<any> {
    constructor(props: any) {//UsersPropsType
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                console.log('onPgeChanged', data.items)
                this.props.setUsers(data.items)
            })
    }

    render() {


        // @ts-ignore
        return <>
            {this.props.isFetching
                && <Preloader/>}

            {/*<Users totalCount={this.props.totalCount}*/}
            {/*       users={this.props.users}*/}
            {/*       pageSize={this.props.pageSize}*/}
            {/*       currentPage={this.props.currentPage}*/}
            {/*       unfollow={this.props.unfollow}*/}
            {/*       follow={this.props.follow}*/}
            {/*       onPageChanged={this.onPageChanged}*/}
            {/*       isFetching={this.props.isFetching}/>*/}
            {/*followingInProgress={} toggleFollowingProgress={}*/}

            <Users {...this.props}/>
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToProps_T => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps_T => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users: Array<User_T>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPageNumber: number) => {
//             dispatch(setCurrentPageAC(currentPageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//
//     }
// }

const mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingInProgress
}

// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)