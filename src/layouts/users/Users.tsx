import React from 'react';
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";
import styled, {css} from "styled-components";
import {WrapperSidebarBlock} from "../../components/wrappers/WrapperSidebarBlock";

const IMG_URL = 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1715219430~exp=1715223030~hmac=0dcafb1ada6b1ecf3fc83416a4b2fbc66b28a80ce4737a266d06c1bdf9e9d117&w=996'

class Users extends React.Component<any> {
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
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i < pagesCount; i++) {
            pages.push(i)
        }

        // @ts-ignore
        return (
            <div>

                <div>
                    {this.props.users.length > 0 && pages.map(p => (
                        <PageSpan
                            active={this.props.currentPage === p}
                            onClick={() => this.onPageChanged(p)}>{p}</PageSpan>

                    ))}
                </div>
                {
                    this.props.users.length > 0 &&
                    this.props.users.map((u: any) => <div key={u.id}>
            <span>
                <div>
                    {/*<img src={u.photoUrl} style={{height: "auto",*/}
                    {/*    width: "100%",*/}
                    {/*    maxWidth: "72px"}}/> */}
                    <img src={u.photos.small != null ? u.photos.small : IMG_URL} style={{
                        height: "auto",
                        width: "100%",
                        maxWidth: "72px"
                    }}/>
                </div>
                <span>
                    {u.followed
                        ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            this.props.follow(u.id)
                        }}>Follow</button>
                    }

                </span>
            </span>
                            <span>
                <span>
                    <div>{u.name}</div><div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.planet'}</div>
                    <div>{'u.location.galaxy'}</div>
                </span>
            </span>
                        </div>
                    )}
            </div>
        )
    }
}

export default Users

type PageSpanType = any & {
    active: boolean
}
const PageSpan = styled.span<PageSpanType>`
  font-weight: ${props => props.active && 'bold'};;
`
