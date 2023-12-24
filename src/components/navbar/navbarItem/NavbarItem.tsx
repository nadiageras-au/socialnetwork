import React, {FC} from 'react';
import styled from 'styled-components';
import {Icon} from "../../icon/IconSVG";


type NavbarItemPropsType = {
    iconId?: string
    width?: string
    height?: string
    title: string
}
export const NavbarItem = (props:NavbarItemPropsType) => {
    return (
        <StyledNavbarItem>
            <Icon iconId={props.iconId} width={props.width} height={props.height}/>
            <span>{props.title}</span>
        </StyledNavbarItem>
    );
};

const StyledNavbarItem = styled.a`
//text-align: center;
//  align-items: center;
justify-content: flex-start;
display: flex;
gap: 8px;
align-items: center;
`