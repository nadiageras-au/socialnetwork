import React, {ChangeEvent} from 'react';
import {MyPosts} from "./myPosts/MyPosts";
import styled from 'styled-components';
// import {Image} from '../../components/image/Image.styled'
import {Button, Form, Input} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
// import {theme} from "../../styles/Theme.styled";
import {theme} from "../../styles/Theme.styled";
import sendIcon from '../../assets/images/icons/send.svg'
import photoIcon from '../../assets/images/icons/addPicture.svg'
import videoIcon from '../../assets/images/icons/addVideo.svg.svg'
import {PostPropsType} from "./myPosts/post/Post";

export type ProfileProps = {
    posts: Array<PostPropsType>
    newValueForPost: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}
export const ProfileContent = ({addPost, updateNewPostText,newValueForPost, posts}: ProfileProps) => {
    const onAddPostHandler = () => {
        addPost()
    }
    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(e.currentTarget.value)
    }
    return (
        <div>
            <AddPost>
                <StyledForm action = "/"method = "post" >
                    {/*<StyledTextArea ref={newPostElement}/>*/}
                    {/*<textarea ref={newPostElement} value={props.state.newValueForPost}/>*/
                    }
                    <textarea value = {newValueForPost} onChange = {onChangeHandler}/>
                    <button onClick = {onAddPostHandler}> Add </button>
                    <AddPostBtns>
                        <label htmlFor = "addPostFile">
                            <InputBtn type = "button" />
                        </label>
                        {/*<label htmlFor="addPostFile">*/
                        }
                        {/*    /!*<InputBtn type="file"/>*!/*/
                        }
                        {/*    <InputBtn type="button"/>*/
                        }
                        {/*</label>*/
                        }
                        <SendPostButton title = 'Submit' />
                    </AddPostBtns>
                </StyledForm>
            </AddPost>
             <MyPosts posts = {posts}/>
        </div>
    )
};

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