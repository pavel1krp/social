import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {v1} from "uuid";

const postData = [
    {
        id: v1(),
        message: 'Hi',
        name: 'Dasha',
        likesCount: 11,
        src: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'
    },
    {
        id: v1(),
        message: 'My',
        name: 'Vova',
        likesCount: 12,
        src: 'https://klike.net/uploads/posts/2019-03/1551511804_3.jpg'
    },
    {
        id: v1(),
        message: 'Why ME????',
        name: 'Solyara',
        likesCount: 10,
        src: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'
    },
    {
        id: v1(),
        message: 'Why',
        name: 'Sova',
        likesCount: 15,
        src: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'
    },
]
let dialogsData = [
    {id: v1(), name: 'Pasha'},
    {id: v1(), name: 'Dasha'},
    {id: v1(), name: 'Sasha'},
    {id: v1(), name: 'Masha'},
    {id: v1(), name: 'Nasha'},
    {id: v1(), name: 'Glasha'},
    {id: v1(), name: 'Gosha'},
]

let messagesData = [
    {id: v1(), message: 'Hi'},
    {id: v1(), message: 'Hi chel'},
    {id: v1(), message: 'Hi body'},
    {id: v1(), message: 'Hi bye'},
    {id: v1(), message: 'Hiushki'},
    {id: v1(), message: 'Bye'},
]

ReactDOM.render(
    <App post={postData} dialogsData={dialogsData} messagesData={messagesData}/>,
    document.getElementById('root')
);