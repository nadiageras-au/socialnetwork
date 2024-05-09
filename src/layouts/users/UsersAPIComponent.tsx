import React from 'react';
import axios from "axios";
import {Users} from '../users/Users'
import {UsersPropsType} from "./UsersContainer";
import styled, {css} from "styled-components";
import {WrapperSidebarBlock} from "../../components/wrappers/WrapperSidebarBlock";


class UsersAPIComponent extends React.Component<any> {
    constructor(props: any) {//UsersPropsType
        super(props);
    }

    componentDidMount() {
        // if (this.props.users.length === 0) {
        axios.get<any>
        (`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                console.log(this.props.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get<any>
        (`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                console.log('onPgeChanged', response.data.items)
                this.props.setUsers(response.data.items)
            })
    }
    render() {


        // @ts-ignore
        return <Users totalCount={this.props.totalCount}
                      users={this.props.users}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      onPageChanged={this.onPageChanged}/>
    }
}

export default UsersAPIComponent


