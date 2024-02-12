import React from 'react';
import {Image} from '../../components/image/Image.styled'
import {MyPosts} from "./myPosts/MyPosts";
import styled from "styled-components";
import {Button, Form, Input} from 'antd';
import * as string_decoder from "string_decoder";
import TextArea from 'antd/lib/input/TextArea';
import {theme} from "../../styles/Theme.styled";
import sendIcon from '../../assets/images/icons/send.svg'
import photoIcon from '../../assets/images/icons/addPicture.svg'
import videoIcon from '../../assets/images/icons/addVideo.svg.svg'
import {PostPropsType} from "./myPosts/post/Post";




// type PostTextareaPropsType =
// {
//     name: string
//     placeholder: string
// }

type ProfileStateProps = {
    posts: Array<PostPropsType>
}
type ProfileProps = {
    state:ProfileStateProps
}
export const Profile = (props:ProfileProps) => {
    // const imgLink = "https://img.razrisyika.ru/kart/136/544000-fotografiy-v-horoshem-kachestve-26.jpg"
    // const avatarLink = "https://getwallpapers.com/wallpaper/full/5/4/c/1437228-free-kawaii-fox-wallpaper-1920x1200-xiaomi.jpg"

    // @ts-ignore
    return (
        <div>
            <AddPost>
                <StyledForm action="/" method="post">
                    <StyledTextArea
                    name="post-text" placeholder="Create a new post ..."></StyledTextArea>

                    <AddPostBtns>
                        <label htmlFor="addPostFile">
                            <InputBtn type="button"/>
                        </label>
                        {/*<label htmlFor="addPostFile">*/}
                        {/*    /!*<InputBtn type="file"/>*!/*/}
                        {/*    <InputBtn type="button"/>*/}
                        {/*</label>*/}
                        <SendPostButton title='Submit'/>
                    </AddPostBtns>
                </StyledForm>
            </AddPost>

            <MyPosts posts={props.state.posts}/>
        </div>
    );
};

// const ProfileAvatar = styled(Image)`
// border-radius: 50px;
// max-width: 100px;
// height: 100%;
//
// `

const AddPost = styled.div`
  padding: 30px;
  background-color: #fff;
  border-radius: ${theme.borderRadius.radius};
  margin-bottom: 10px;
`

const StyledForm = styled(Form)`
display: flex;`

const StyledTextArea = styled(TextArea)`
  display: block;
  flex-grow: 1;
  width: 75%;
  height: 36px;
  overflow: hidden;
  border: none;
  font-size: 16px;
  line-height: 1.5;
  color: #757575;
  font-family: inherit;`

const SendPostButton = styled(Button)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: #9a01fa url(${sendIcon}) center no-repeat;
  margin-left: 1.5rem;
  font-size: 0;
  color: transparent;`

const AddPostBtns = styled.div`
  display: flex;
  justify-content: space-between`

const InputBtn = styled(Input)`
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: #9a01fa url(${photoIcon}) center no-repeat;
  margin-left: 1.5rem;
  font-size: 0;
  color: transparent;
`