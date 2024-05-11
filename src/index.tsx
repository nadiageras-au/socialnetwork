import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyle} from "./styles/GlobalStyles";
// import {store} from "./redux/redux-store";
import {Provider} from "react-redux";
import {StoreContext} from "./StoreContext";
import {AppStateType, store} from "./redux/redux-store";

  export let rerenderEntireTree = (state:AppStateType) => {
    ReactDOM.render(
             <Provider store={store}>
                <GlobalStyle/>
                {/*<App dispatch={store.dispatch.bind(store)}/>*/}
                <App store={store}/>
            </Provider>,
        document.getElementById('root')
    );
 }

rerenderEntireTree(store.getState());
store.subscribe(()=> {
    rerenderEntireTree(store.getState())
})
