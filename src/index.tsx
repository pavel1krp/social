import React from 'react';
import './index.css';
import {addPost, state, StatePropsType} from "./Redux/State";
import {rerenderEntireTree} from "./render";


rerenderEntireTree(state)