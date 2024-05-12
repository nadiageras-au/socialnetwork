import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/IconSVG";
import {Image} from "../../../../components/image/Image.styled"
import avatar from '../../../../assets/images/avatars/jediObiWan.png'

export type T_PostsData = {
    id: number
    text: string
    media: string
    postDateInfo: string
    like: string
    comment: string
    share: string
}
export const Post = (props: T_PostsData) => {

    return (
        <StyledPost>
            <PostHeader>
                <WrapperLeft>
                    <AvatarImg src={avatar}/>
                    <MetaData>
                        <PostAuthorName>Obi-Wan Kenobi</PostAuthorName>
                        <Timeinfo>{props.postDateInfo}</Timeinfo>
                    </MetaData>

                </WrapperLeft>

                <Bookmark>
                    <Icon iconId='dots'/>
                </Bookmark>

            </PostHeader>
            <section>{props.text}</section>
            {props.media ?
                <section><Image src={props.media}/></section>
                : ''
            }
            {/*<section><Image src={props.media}/></section>*/}

            <PostFooter>
                <FooterItemPostInfo>
                    <Icon iconId="heart" width="35" height="24"/>
                    <span>{props.like}</span>
                </FooterItemPostInfo>
                <FooterItemPostInfo>
                    <Icon iconId='chat' width="35" height="24"/>
                    <span>{props.comment}</span>
                </FooterItemPostInfo>
                <FooterItemPostInfo>
                    <Icon iconId='share' width="35" height="24"/>
                    <span>{props.share}</span>
                </FooterItemPostInfo>
            </PostFooter>
        </StyledPost>
    );
};

const StyledPost = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-width: 800px;
  background-color: #fff;
  border-radius: 12px;
  //border: 2px solid #b26f4a;
  padding: 30px;
  margin-bottom: 15px;
`

const PostHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const WrapperLeft = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 50%;
  align-items: center;`

const AvatarImg = styled(Image)`
  height: 70px;
  width: auto;
`

const MetaData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;`

const PostAuthorName = styled.h3`
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  color: rgba(7, 27, 42, 1);
`

const Timeinfo = styled.span`
  color: #A0A0A0;
  font-family: Poppins;
  font-size: 16px;
  line-height: 1.5; /* 24px */
`

const Bookmark = styled.div`
  display: flex;
`

const PostFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 12px;`

const FooterItemPostInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`