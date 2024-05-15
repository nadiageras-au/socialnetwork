import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow,
    User_T
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import axios, {AxiosResponse} from "axios";
import {Users} from "./Users";
import {Preloader} from "../../components/preloader/Preloader";


type mapDispatchToProps_T = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<User_T>) => void
    setCurrentPage: (currentPageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching:boolean) => void

}

type MapStateToProps_T = {
    users: Array<User_T>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}

export type UsersPropsType = MapStateToProps_T & mapDispatchToProps_T


type Response<T = {}> = {
    items: T[]
    error: null | any
    totalCount: number
}



class UsersAPIComponent extends React.Component<any> {
    constructor(props: any) {//UsersPropsType
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get<Response<User_T>>
        (`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {
                withCredentials: true
            })
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get<any>
        (`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            {
                withCredentials: true,
            })
            .then(response => {
                this.props.toggleIsFetching(false)
                console.log('onPgeChanged', response.data.items)
                this.props.setUsers(response.data.items)
            })
    }

    render() {


        // @ts-ignore
        return <>
            {this.props.isFetching
                && <Preloader/>}

            <Users totalCount={this.props.totalCount}
                   users={this.props.users}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   onPageChanged={this.onPageChanged}
                   isFetching={this.props.isFetching}/>
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToProps_T => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
    toggleIsFetching
}

// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
export const UsersContainer =  connect(mapStateToProps,mapDispatchToProps)(UsersAPIComponent)