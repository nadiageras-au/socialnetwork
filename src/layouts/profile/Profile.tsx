import React, {ChangeEvent, forwardRef, useRef} from 'react';
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

type TextAreaType = {
    ref: any
}
export type ProfileStateProps = {
    newValueForPost: string
    posts: Array<PostPropsType>
}
export type ProfileProps = {
    state: ProfileStateProps
    addPost: (text:string)=> void
    onChangePostValue:(newPost: string)=>void
}
export const Profile = (props: ProfileProps) => {

    //let newPostElement = useRef<HTMLTextAreaElement>(null);

    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        //debugger;
        props.onChangePostValue(e.currentTarget.value)
    }
    const addPostHandler = () => {
        //debugger;
       // if (newPostElement.current !== null) {
            //props.addPost(newPostElement.current.value)
            props.addPost(props.state.newValueForPost)
        //}
    }
    // name="post-text"
    return (
        <div>
            <AddPost>
                <StyledForm action="/" method="post">
                    {/*<StyledTextArea ref={newPostElement}/>*/}
                   {/*<textarea ref={newPostElement} value={props.state.newValueForPost}/>*/}
                   <textarea value={props.state.newValueForPost} onChange={onChangeHandler}/>
                    <button onClick={addPostHandler}>Add</button>
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