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
                    <Route  path='/dialogs' component={Dialogs}/>
                    <Route  path='/profile' component={Profile}/>
                    <Route  path='/news' component={News}/>
                    <Route  path='/music' component={Music}/>
                    <Route  path='/setting' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
