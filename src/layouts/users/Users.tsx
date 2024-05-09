import React from 'react';
import styled from "styled-components";
import {User_T} from "../../redux/usersPage-reducer";
import axios from "axios";

const IMG_URL = 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1715219430~exp=1715223030~hmac=0dcafb1ada6b1ecf3fc83416a4b2fbc66b28a80ce4737a266d06c1bdf9e9d117&w=996'

type UsersProps = {
    totalCount: number
    users: User_T[]
    pageSize: number
    currentPage: number
    unfollow:(userId:number)=>void
    follow: (userId:number)=>void
    onPageChanged:(pageNumber: number)=>void
}

export const Users = (props: UsersProps) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    return (

        <div>

            <div>
                {props.users.length > 0 && pages.map(p => (
                    <PageSpan
                        active={props.currentPage === p}
                        onClick={() => props.onPageChanged(p)}>{p}</PageSpan>

                ))}
            </div>
            {
                props.users.length > 0 &&
                props.users.map((u: any) => <div key={u.id}>
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
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
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
    );
};

type PageSpanType = any & {
    active: boolean
}
const PageSpan = styled.span<PageSpanType>`
  font-weight: ${props => props.active && 'bold'};;
`
