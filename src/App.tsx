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
import {ActionsType, StatePropsType} from "./Redux/store";

export type MessagesDataType = {
    id: string
    message: string
}


type AppPropsType = {
    state: StatePropsType
    dispatch: (action:ActionsType) => void
}


const App = (props: AppPropsType) => {
    // const updateNewMessageCallback = (newMessage:string)=>{
    //     props.updateNewMessage.
    // }
    const addPostCallback = ()=>{
        props.dispatch({type: "ADD-POST"})
    }
    const updateNewPostCallBack = (newText:string)=>{
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText})
    }
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route render={() => <Profile
                        newPostText={props.state.ProfilePage.newPostText} dispatch={props.dispatch}
                        post={props.state.ProfilePage.postData} />} path={'/profile'}/>
                    <Route render={() => <Dialogs newMessageBody={props.state.DialogPage.newMessageBody}
                        dialogState={props.state.DialogPage} dispatch={props.dispatch}/>}
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
