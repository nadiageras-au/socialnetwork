import React from 'react';
import './App.css';
import {Header} from "./layouts/header/Header";
import {Profile, ProfileStateProps} from "./layouts/profile/Profile";
import {Sidebar} from "./layouts/sidebar/Sidebar";
import {Dialogs, DialogsProps, DialogsStateProps} from "./layouts/dialogs/Dialogs";
import styled from "styled-components";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./layouts/news/News";
import {Events} from "./layouts/events/Events";
import {Settings} from "./layouts/settings/Settings";
import {PostPropsType} from "./layouts/profile/myPosts/post/Post";
import {DialogItemProps} from "./layouts/dialogs/dialog/Dialog";
import {MessageProps} from "./layouts/dialogs/message/Message";


// export type ProfilesPageStateProps = {
//     posts: Array<PostPropsType>
// }

type AppProps = any & {
    state: {
        dialogsPage: DialogsStateProps
        profilePage: ProfileStateProps
    }
    addPost: (text:string)=> void
    onChangePostValue: (text:string) => void
}

// type StateProps = {
//     state: {
//         dialogsPage: DialogsProps
//         profilePage: ProfileStateProps
//     }
//
// }

function App(props:AppProps) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>
                <WrapperContent>
                    {/*<Route exact path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />}/>*/}
                    <Route exact path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />}/>
                    <Route path='/profile' render={() => <Profile
                        state={props.state.profilePage}
                        addPost={props.addPost}
                        onChangePostValue={props.onChangePostValue}/>}/>
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


