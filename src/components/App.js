import React from 'react';
import Login from "./components/Login";
import {Route, Switch} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Greet from "./components/Greet";

export default function App() {
    return (
        <>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/Greet" component={Greet}/>
        </Switch>
        
        </>
    )
}
