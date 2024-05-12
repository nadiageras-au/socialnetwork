import React from 'react';
import {Icon} from "../../../components/icon/IconSVG";
import {theme} from "../../../styles/Theme.styled";
import styled from 'styled-components';
import {Button, Form, Input} from 'antd';
import TextArea from 'antd/lib/input/TextArea';

import sendIcon from '../../../assets/images/icons/send.svg'
import photoIcon from '../../../assets/images/icons/addPicture.svg'

export const ProfileTabPanel = (props: any) => {
    return (<>
            {props.profile.userId!=2
                ?  <AddPost> <StyledForm action="/" method="post">
                        {/*<StyledTextArea ref={newPostElement}/>*/}
                        {/*<textarea ref={newPostElement} value={props.state.newValueForPost}/>*/
                        }
                        <textarea value={props.newValueForPost} onChange={props.onChangeHandler}/>
                        <button onClick={props.onAddPostHandler}> Add</button>
                        <AddPostBtns>
                            <label htmlFor="addPostFile">
                                <InputBtn type="button"/>
                            </label>
                            {/*<label htmlFor="addPostFile">*/
                            }
                            {/*    /!*<InputBtn type="file"/>*!/*/
                            }
                            {/*    <InputBtn type="button"/>*/
                            }
                            {/*</label>*/
                            }
                            <SendPostButton title='Submit'/>
                        </AddPostBtns>
                    </StyledForm> </AddPost>
                :   <TabPanel>

                    <h1>{props.profile.fullName}</h1>
                    <TabPanelItem>
                        <Icon iconId={'shield'} width={"24px"} height={"24px"}/>
                        <span>Posts</span>
                    </TabPanelItem>
                    <TabPanelItem>
                        <Icon iconId={'shield'} width={"24px"} height={"24px"}/>
                        <span>Photos</span>
                    </TabPanelItem>
                    <TabPanelItem>
                        <Icon iconId={'shield'} width={"24px"} height={"24px"}/>
                        <span>Videos</span>
                    </TabPanelItem>
                    <TabPanelItem>
                        <Icon iconId={'shield'} width={"24px"} height={"24px"}/>
                        <span>Tagged</span>
                    </TabPanelItem>
                    <TabPanelItem>
                        <Icon iconId={'shield'} width={"24px"} height={"24px"}/>
                        <span>Followers</span>
                    </TabPanelItem>
                    <TabPanelItem>
                        <Icon iconId={'shield'} width={"24px"} height={"24px"}/>
                        <span>Following</span>
                    </TabPanelItem>
                </TabPanel>
            }
        </>
    );
};


const TabPanel = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`

const TabPanelItem = styled.li`
  list-style: none;
  align-items: center;
  height: 40px;
  display: flex;
  justify-content: center;
  padding: 8px 18px;
  width: auto;
  max-width: 140px;
  //border: 1px solid grey;
  border-radius: 8px;

  span {
    display: inline-block;
    padding-left: 8px;
  }
`
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

