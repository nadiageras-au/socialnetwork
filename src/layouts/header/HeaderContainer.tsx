import React from 'react';
import styled from 'styled-components';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {T_ProfileInfo} from "../../redux/profileReducer";
import {T_PostsData} from "../profile/myPosts/post/Post";
import {RouteComponentProps} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";


// type MapStateToPropsType = {
//     profile: T_ProfileInfo | null
//     posts: T_PostsData[]
//     newValueForPost: string
// }
//
// type MapDispatchToPropsType = {
//     changePostValueActionCreator:(text:string) => void
//     addPostActionCreator:() => void
//     setUserProfile:( profile: T_ProfileInfo)=>void
// }
// type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
// type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        axios.get
        (`https://social-network.samuraijs.com/api/1.0/auth/me/`, {
            withCredentials: true
        })
            .then(response => {
                debugger
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        // return <Header {...this.props}/>
        return <Header {...this.props}/>
    }

}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)

const StyledHeader = styled.header`
  grid-area: h;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(241, 241, 241);
  padding: 15px;`


