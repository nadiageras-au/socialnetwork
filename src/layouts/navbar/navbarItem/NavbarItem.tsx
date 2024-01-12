import React, {FC} from 'react';
import styled, {css} from 'styled-components';
import {Icon} from "../../../components/icon/IconSVG";
import {NavLink} from "react-router-dom";


type NavbarItemPropsType = {
    iconId?: string
    width?: string
    height?: string
    title: string
    component?: string
}

type StyledNavbarItemType = any & {
    active: boolean;
}

type NavLinkType = any & {
    active: boolean;
}

export const NavbarItem = (props:NavbarItemPropsType) => {
    return (
        <StyledNavbarItem>
            <NavLink to={'/' + props.component} activeClassName={"active"}>
                <Icon iconId={props.iconId} width={props.width} height={props.height}/>
                <span>{props.title}</span>
            </NavLink>

        </StyledNavbarItem>

        // <Route/>
    );
};


// const StyledNavbarItem = styled.a<StyledNavbarItemType>`
//   //text-align: center;
//   //  align-items: center;
//   justify-content: flex-start;
//   display: flex;
//   gap: 8px;
//   align-items: center;
//
//   ${props => props.active && css<{active:boolean}> `
//     & span {
//       font-weight: bold;
//     }
//   `}
// `

const StyledNavbarItem = styled.div<StyledNavbarItemType>`
  & a {
    justify-content: flex-start;
    display: flex;
    gap: 8px;
    align-items: center;

    &.active {
        font-weight: bold;
    }
  } 
  
`