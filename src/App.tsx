import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
// import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/profile/Profile";
import {Sidebar} from "./components/sidebar/Sidebar";
import {Dialogs} from "./components/dialogs/Dialogs";
import styled from "styled-components";


function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar/>
            <WrapperContent>
                <Dialogs/>
                {/*<Profile />*/}
            </WrapperContent>

        </div>
    );
}

export default App;

const WrapperContent = styled.div`
  grid-area: c;
  background-color: #fff;
`


