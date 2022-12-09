import {addPost, state, StatePropsType, subscribe, updateNewPostText} from "./Redux/State";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

const rerenderEntireTree =()=>{
ReactDOM.render(
    <React.StrictMode>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </React.StrictMode>,
    document.getElementById('root')
);}
rerenderEntireTree()


subscribe(rerenderEntireTree);
