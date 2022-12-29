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
import {StatePropsType} from "./Types/types";

export type MessagesDataType = {
    id: string
    message: string
}


type AppPropsType = {
    state: StatePropsType
    dispatch:(type:any)=>void
}


const App = (props: AppPropsType) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route render={() => <Profile
                        post={props.state.profilePage.postData} postText={props.state.profilePage.newPostText} dispatch={props.dispatch}/>} path={'/profile'} />
                    <Route render={() => <Dialogs dispatch ={props.dispatch} newMessageText={props.state.dialogPage.newMessageText}
                        dialogState={props.state.dialogPage} />}
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
