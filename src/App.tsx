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
import {StatePropsType, updateNewPostText} from "./Redux/State";

export type MessagesDataType = {
    id: string
    message: string
}


type AppPropsType = {
    state: StatePropsType
    addPost: (post:string)=>void
    updateNewPostText: (newText:string)=>void
}


const App = (props: AppPropsType) => {
    const addPostCallback = (post:string)=>{
        props.addPost(post)
    }
    const updateNewPostCallBack = (newText:string)=>{
        props.updateNewPostText(newText)
    }
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route render={() => <Profile
                        newPostText={props.state.ProfilePage.newPostText} updateNewPostText={updateNewPostCallBack}
                        post={props.state.ProfilePage.postData} addPost={addPostCallback}/>} path={'/profile'}/>
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
