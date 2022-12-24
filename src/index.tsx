import {store} from "./Redux/redux-store";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

const rerenderEntireTree =()=>{
ReactDOM.render(
    <React.StrictMode>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
);}
rerenderEntireTree()


store.subscribe(rerenderEntireTree);
