import React from 'react';
import Header from "./Todo/Header";
import { Route, Switch , Redirect} from 'react-router-dom';
import Sidebar from "./Todo/Sidebar";
import About from './Todo/About';
import Dashboard from './Todo/Dashboard';
import Project from "./Todo/Project";
import Topics from "./Todo/Topics";
import Login from './Todo/Login';
import Contact from './Todo/Contact';
import Logout from './Todo/Logout';
import PrivateRoute from "./Todo/PrivateRoute";

export default function App() {
    return (
        <>
        <Header />
        <Switch>
            <Route exact path='/sidebar' component={Sidebar}/>
            <Route exact path='/about' component={About}/>
            <PrivateRoute exact path='/dashboard' component={Dashboard}/>
            <PrivateRoute exact path='/project' component={Project}/>
            <PrivateRoute exact path='/topics' component={Topics}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/logout' component={Logout}>
                <Redirect to='login'/>
            </Route>
            

        </Switch>
        </>
    )
}
