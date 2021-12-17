import React from 'react';
import Login from "./components/Login";
import {Route, Switch} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Form from "./components/Form";

export default function App() {
    return (
        <>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
        
        </>
    )
}
