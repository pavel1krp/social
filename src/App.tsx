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

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                  <Route component={Profile} path={'/profile'}/>
                  <Route component={Dialogs} path={'/dialogs'}/>
                  <Route component={News} path={'/news'}/>
                  <Route component={Music} path={'/music'}/>
                  <Route component={Settings} path={'/setting'}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
