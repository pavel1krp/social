import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import News from "./Components/News/News";

export type MessagesDataType = {
    id: string
    message: string
}
export type DialogDataType = {
    id: string
    name: string
}
export type postDatapropsType = {
    id: string
    message: string
    name: string
    likesCount: number
    src: string
}

type ProfilePageType = {
    postData: postDatapropsType[]
}

type DialogPageType = {
    dialogsData:DialogDataType[]
    messagesData:MessagesDataType[]
}

type StatePropsType = {
    ProfilePage: ProfilePageType
        DialogPage: DialogPageType
}

type AppPropsType = {
    state: StatePropsType
    addPost: (post:string)=>void
}


const App = (props: AppPropsType) => {
    const addPostCallback = (post:string)=>{
        props.addPost(post)
    }
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route render={() => <Profile
                        post={props.state.ProfilePage.postData} addPost={addPostCallback}/>} path={'/profile'} />
                    <Route render={() => <Dialogs
                        dialogState={props.state.DialogPage}/>}
                           path={'/dialogs'}/>
                    <Route render={() => <News/>}
                           path={'/news'}/>
                    <Route render={() => <Music/>}
                           path={'/music'}/>
                    <Route render={() => <Settings/>}
                           path={'/setting'}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
