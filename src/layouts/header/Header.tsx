import React from 'react';
import styled from 'styled-components';
import {Logo} from "../../components/logo/Logo";
import imgSrc from "../../assets/images/logo.svg"
import {NavLink} from "react-router-dom";

// type HeaderProps_T = {
//     isAuth: boolean
//     login: string
// }

export const Header = (props: any) => {
    const logoLink = "https://galerey-room.ru/images/144107_1413628867.png"


    return (
        <StyledHeader>
            <Logo src={imgSrc}/>
            {/*<Logo/>*/}
            <div>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </StyledHeader>
    );
};

//
// const StyledHeader = styled.div`
//   grid-area: h;
//   background-color: #c9c9a6;
// `

const StyledHeader = styled.header`
  grid-area: h;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(241, 241, 241);
  padding: 15px;`

//
//     `
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   padding-top: 60px;
//   background-color: #e0f9fc;
// `

