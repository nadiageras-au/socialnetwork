import React from 'react';
import imgSrc from "../../assets/images/avatars/women_1.png"
import {WrapperSidebarBlock} from "../wrappers/WrapperSidebarBlock";
import {Icon} from "../icon/IconSVG";
import styled from "styled-components";
import {NavbarItem} from "./navbarItem/NavbarItem";

export const Navbar = () => {
    return (
        <WrapperSidebarNavbar>
            <nav className='nav'>
                <NavbarItem iconId="user" width='24px' height='24px' title='Profile'/>
                <NavbarItem iconId="list_right" width='24px' height='24px' title='News'/>
                <NavbarItem iconId="messages" width='23px' height='18px' title='Messages'/>
                <NavbarItem iconId="calendar" width='24px' height='24px' title='Events'/>
                <NavbarItem iconId="groups" width='24px' height='24px' title='Groups'/>
                <NavbarItem iconId="settings" width='24px' height='24px' title='Settings'/>
            </nav>
        </WrapperSidebarNavbar>

    );
};



const WrapperSidebarNavbar = styled(WrapperSidebarBlock)`
  padding: 40px 0;
  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 20px;
  }

`
