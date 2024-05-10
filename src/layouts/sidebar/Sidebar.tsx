import React from 'react';
import {Navbar} from "../navbar/Navbar";
import {UserInfo} from "../userInfo/UserInfo";
import styled from "styled-components";

export const Sidebar = () => {
    return (
        <StyledSidebar>
           <UserInfo/>
           <Navbar/>
        </StyledSidebar>
    );
};

const StyledSidebar = styled.aside`
  width: 285px;
  grid-area: n;
`