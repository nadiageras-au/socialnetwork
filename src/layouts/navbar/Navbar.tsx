import React from 'react';
import imgSrc from "../../assets/images/avatars/women_1.png"
import {WrapperSidebarBlock} from "../../components/wrappers/WrapperSidebarBlock";
import {Icon} from "../../components/icon/IconSVG";
import styled from "styled-components";
import {NavbarItem} from "./navbarItem/NavbarItem";

export const Navbar = () => {
    return (
        <WrapperSidebarNavbar>
            <nav className='nav'>
                <NavbarItem iconId="user" width='24px' height='24px' title='Profile' component='profile'/>
                <NavbarItem iconId="messages" width='23px' height='18px' title='Messages' component='dialogs'/>
                <NavbarItem iconId="groups" width='24px' height='24px' title='Users' component='users'/>
                <NavbarItem iconId="list_right" width='24px' height='24px' title='News' component='news'/>
                <NavbarItem iconId="calendar" width='24px' height='24px' title='Events' component='events'/>
                {/*<NavbarItem iconId="groups" width='24px' height='24px' title='Groups' component='groups'/>*/}
                <NavbarItem iconId="settings" width='24px' height='24px' title='Settings' component='settings'/>
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
