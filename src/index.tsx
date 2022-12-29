import './index.css';
import {store } from "./Redux/redux-store";
// import {StatePropsType, store as sss} from "./Redux/Store";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {EmptyObject} from "redux";
import {StatePropsType} from "./Types/types";
const rerenderEntireTree =(state:StatePropsType) =>{

    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 dispatch = {store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    )
}
rerenderEntireTree(store.getState())
store.subscribe(()=> rerenderEntireTree(store.getState()))