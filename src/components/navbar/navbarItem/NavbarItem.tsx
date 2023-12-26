import React, {FC} from 'react';
import styled, {css} from 'styled-components';
import {Icon} from "../../icon/IconSVG";


type NavbarItemPropsType = {
    iconId?: string
    width?: string
    height?: string
    title: string
    isActive: boolean
}



type StyledNavbarItemType = any & {
    active: boolean;
}


export const NavbarItem = (props:NavbarItemPropsType) => {
    return (
        <StyledNavbarItem active={props.isActive}>
            <Icon iconId={props.iconId} width={props.width} height={props.height}/>
            <span>{props.title}</span>
        </StyledNavbarItem>
    );
};

const StyledNavbarItem = styled.a<StyledNavbarItemType>`
  //text-align: center;
  //  align-items: center;
  justify-content: flex-start;
  display: flex;
  gap: 8px;
  align-items: center;
  
  ${props => props.active && css<{active:boolean}> `
    & span {
      font-weight: bold;
    }
  `}

`