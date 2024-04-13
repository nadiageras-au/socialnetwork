import React from 'react';
import {NavLink} from "react-router-dom";
import {Image} from "../../../components/image/Image.styled"
import avatar from "../../../assets/images/avatars/jediObiWan.png";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/wrappers/FlexWrapper";

export type DialogItemProps = {
    avatar: string
    name: string
    id: number
}


export const DialogItem: React.FC<DialogItemProps> = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <FlexWrapper>

            <NavLink style={{display: "flex", flexDirection: "column", textAlign: "center"}} to={path}><AvatarImg src={props.avatar}/> {props.name}</NavLink>
        </FlexWrapper>
    );
};


export const AvatarImg = styled(Image)`
  height: auto;
  max-width: 50px;
`