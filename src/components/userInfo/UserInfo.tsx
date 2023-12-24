import React from 'react';
import styled from "styled-components";
import {Image} from "../image/Image.styled";
//images
import avatarSrc from "../../assets/images/avatars/jediObiWan.png"
import avatarBg from '../../assets/images/photos/bg_avatar.jpg'
import iconMap from '../../assets/images/icons/map.svg'
//global styles and variables
import {theme} from "../../styles/Theme.styled";
import {Button} from "../button/Button.styled";
import {WrapperSidebarBlock} from "../wrappers/WrapperSidebarBlock";
import {Icon} from "../icon/IconSVG";


export const UserInfo = () => {
    return (
        <WrapperSidebarBlock>

            <AvatarBG>
                <AvatarImg src={avatarSrc} width="45%" height="auto"/>
            </AvatarBG>
            <UserName>Obi-Wan Kenobi</UserName>
            <UserPlace>
                {/*<Image src={iconMap} width="auto" height={"16px"}/>*/}
                <Icon iconId='map' width='15px' height='15px'/>
                Stewjon, Deep Core
            </UserPlace>
            <UserSubscribeInfo>
                <FollowData>Followers<span>127</span></FollowData>
                <FollowData>Following<span>129</span></FollowData>
            </UserSubscribeInfo>
            <Button title='View Profile'/>
        </WrapperSidebarBlock>
    );
};



const AvatarBG = styled.div`
  height: 130px;
  width: 100%;
  margin-bottom: 60px;
  background-image: url(${avatarBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: ${theme.borderRadius.radius};
  position: relative;`

const AvatarImg = styled(Image)`
  position: absolute;
  bottom: -50%;
  left: 50%;
  transform: translateX(-50%);
`

const UserName = styled.h2`
  font-weight: ${theme.fonts.fontWeightBold};
  font-size: 22px;
  margin-bottom: 8px;`

const UserPlace = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
  align-items: center;
  margin-bottom: 35px;
`

const UserSubscribeInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  align-items: center;
  margin-bottom: 20px;

  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 2px;
    height: 50px;
    background-color: rgba(169, 169, 169, 0.34);
    top: 20%;
    left: 50%;
  }
  `

const FollowData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-weight: ${theme.fonts.fontWeightBold};

  span {
    font-weight: ${theme.fonts.fontWeightReg};
    color: #D809AB;
    text-align: center;
    margin-top: 15px;
  }
`