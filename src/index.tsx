import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyle} from "./styles/GlobalStyles";
import {store} from "./redux/redux-store";
import {MainStateType, StoreType} from "./redux/store"
import {Provider} from "react-redux";
//import {addPost} from "./redux/State";

// type PropsType = {
//     store: {
//         getState: any
//         addPost: (text: string) => void
//         onChangePostValue: (newText:string) => void
//     }
//
// }
  export let rerenderEntireTree = (state:any) => {
    ReactDOM.render(

            <Provider store={store}>
                <GlobalStyle/>
                {/*<App dispatch={store.dispatch.bind(store)}/>*/}
                <App state={state} dispatch={store.dispatch.bind(store)}/>
            </Provider>,


        document.getElementById('root')
    );
 }

rerenderEntireTree(store.getState());
store.subscribe(()=> {
    rerenderEntireTree(store.getState())
})
