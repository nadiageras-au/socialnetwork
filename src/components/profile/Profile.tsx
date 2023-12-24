import React from 'react';
import {Image} from '../image/Image.styled'
import {MyPosts} from "./myPosts/MyPosts";
import styled from "styled-components";
import {Button, Form} from 'antd';
import * as string_decoder from "string_decoder";
import TextArea from 'antd/lib/input/TextArea';
import {theme} from "../../styles/Theme.styled";
import sendIcon from '../../assets/images/icons/send.svg'



// type PostTextareaPropsType =
// {
//     name: string
//     placeholder: string
// }
export const Profile = () => {
    // const imgLink = "https://img.razrisyika.ru/kart/136/544000-fotografiy-v-horoshem-kachestve-26.jpg"
    // const avatarLink = "https://getwallpapers.com/wallpaper/full/5/4/c/1437228-free-kawaii-fox-wallpaper-1920x1200-xiaomi.jpg"

    // @ts-ignore
    return (
        <div className='content'>
            <AddPost>
                <StyledForm action="/" method="post">
                    <StyledTextArea
                    name="post-text" placeholder="Create a new post ..."></StyledTextArea>

                    <div>
                        <label htmlFor="addPostFile">
                            <input type="file"/>
                        </label>
                        <SendPostButton title='Submit'/>
                    </div>
                </StyledForm>
            </AddPost>

            {/*<div>*/}
            {/*    /!*<img src={imgLink} alt="" className="bgContent"/>*!/*/}
            {/*    <div className="content-header">*/}
            {/*        /!*<ProfileAvatar src={avatarLink}/>*!/*/}

            {/*        <div>*/}
            {/*            <p>description</p>*/}
            {/*            <p>description 2nd string</p>*/}
            {/*            <p>description 3rd string</p>*/}
            {/*            <p>description 4th string</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*</div>*/}
            <MyPosts/>
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
  background: #3137C9 url(${sendIcon}) center no-repeat;
  margin-left: 1.5rem;
  font-size: 0;
  color: transparent;`