import React from 'react';
import './App.css';
import {Header} from "./layouts/header/Header";
// import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./layouts/profile/Profile";
import {Sidebar} from "./layouts/sidebar/Sidebar";
import {Dialogs} from "./layouts/dialogs/Dialogs";
import styled from "styled-components";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./layouts/news/News";
import {Events} from "./layouts/events/Events";
import {Settings} from "./layouts/settings/Settings";


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>
                <WrapperContent>
                    <Route exact path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
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


