import React from 'react';
import {Navbar} from "../navbar/Navbar";
import {UserInfo} from "../userInfo/UserInfo";
import styled from "styled-components";
import {UserInfoContainer} from "../userInfo/UserInfoContainer";

export const Sidebar = () => {
    return (
        <StyledSidebar>
           {/*<UserInfo/>*/}
           <UserInfoContainer/>
           <Navbar/>
        </StyledSidebar>
    );
};

const StyledSidebar = styled.aside`
  width: 285px;
  grid-area: n;
`