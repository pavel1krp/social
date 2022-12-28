import './index.css';
import { StatePropsType,store } from "./Redux/State";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
const rerenderEntireTree =(state:StatePropsType) =>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}
                 dispatch = {store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    )
}
rerenderEntireTree(store._state)
store.subscribe(rerenderEntireTree)

