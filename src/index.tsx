import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyle} from "./styles/GlobalStyles";
import {MainStateType, store, StoreType} from "./redux/state"
//import {addPost} from "./redux/State";

// type PropsType = {
//     store: {
//         getState: any
//         addPost: (text: string) => void
//         onChangePostValue: (newText:string) => void
//     }
//
// }
  export let rerenderEntireTree = (state: MainStateType) => {
    ReactDOM.render(
        <>
            <GlobalStyle/>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 // addPost={store.addPost.bind(store)}
                 addMsg={store.addMsg.bind(store)}
                 // onChangePostValue={store.onChangePostValue.bind(store)}
                 onChangeMsgValue={store.onChangeMsgValue.bind(store)}/>
        </>,
        document.getElementById('root')
    );
 }

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree)
