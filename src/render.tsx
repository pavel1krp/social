import {addPost, StatePropsType} from "./Redux/State";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";


export const rerenderEntireTree =(state:StatePropsType) =>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    )
}