import './index.css';
import { StatePropsType,store } from "./Redux/State";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
const rerenderEntireTree =(state:StatePropsType) =>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={store._state}
                 addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}
                 updateMessageText={store.updateMessageText.bind(store)}
                 addMessage={store.addMessage.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    )
}
rerenderEntireTree(store._state)
store.subscribe(rerenderEntireTree)

