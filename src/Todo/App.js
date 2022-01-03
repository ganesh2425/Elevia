import React, {lazy, Suspense} from "react";
import Header from "./Todo/Header";
import { Route, Switch , Redirect} from 'react-router-dom';
import Sidebar from "./Todo/Sidebar";
//import About from './Todo/About';
import Dashboard from './Todo/Dashboard';
import Projects from "./Todo/Projects";
import Topics from "./Todo/Topics";
import Login from './Todo/Login';
import Contact from './Todo/Contact';
import Logout from './Todo/Logout';
import PrivateRoute from "./Todo/PrivateRoute";
import Project from "./Todo/Project";
const About = lazy(()=>import('./Todo/About'));


//Get Location
const location = window.location.pathname;
console.log(location);
export default function App() {
    return (
        <>
        <Header />
        <Suspense fallback={<h2>Loading....</h2>}>
        <Switch>
            <Route exact path='/about' component={About}/>
            <PrivateRoute exact path='/sidebar' component={Sidebar}/>
            <PrivateRoute exact path='/dashboard' component={Dashboard}/>
            <PrivateRoute exact path='/projects/:id' component={Project}/>
            <PrivateRoute exact path='/projects' component={Projects}/>
            <PrivateRoute exact path='/topics' component={Topics}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/logout' component={Logout}>
                <Redirect to='login'/>
            </Route>
            <Route exact path='*'>
                <h3>404 Not Found</h3>
            </Route>
            
        </Switch>
        </Suspense>
        </>
    )
}
