import React from 'react';
import './App.css';
import {Header} from "./layouts/header/Header";
import {Profile} from "./layouts/profile/Profile";
import {Sidebar} from "./layouts/sidebar/Sidebar";
import {Dialogs} from "./layouts/dialogs/Dialogs";
import styled from "styled-components";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./layouts/news/News";
import {Events} from "./layouts/events/Events";
import {Settings} from "./layouts/settings/Settings";
import {PostPropsType} from "./layouts/profile/myPosts/post/Post";
import {DialogItemProps} from "./layouts/dialogs/dialog/Dialog";
import {MessageProps} from "./layouts/dialogs/message/Message";

export type DialogsPageStateProps = {
    dialogs:Array<DialogItemProps>
    messages: Array<MessageProps>
}
export type ProfilesPageStateProps = {
    posts: Array<PostPropsType>
}

type StateProps = {
    dialogsPage: Array<DialogsPageStateProps>
    profilePage: Array<ProfilesPageStateProps>
}

type AppProps = any & {
    state: StateProps
}

function App(props:AppProps) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>
                <WrapperContent>
                    <Route exact path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />}/>
                    <Route path='/profile' render={() => <Profile state={props.state.profilePage}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/events' component={Events}/>
                    <Route path='/settings' component={Settings}/>
                    {/*<Dialogs/>*/}
                    {/*<Profile />*/}
                </WrapperContent>

            </div>
        </BrowserRouter>

    );
}

export default App;

const WrapperContent = styled.div`
  grid-area: c;
  background-color: #fff;
`


