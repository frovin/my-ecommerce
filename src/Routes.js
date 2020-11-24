import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from './views/Home';
import Signup from './views/Signup';
import Admin from './views/Admin';
import Login from './views/Login';
import Store from './views/Store';


const Logout = ()=>{
    window.localStorage.removeItem('token');
    return <Redirect to="/"/>
}

function Routes(){
    return(
        <Router>
            <Switch>
                <Route  path="/" exact component={Home}/>
                <Route  path="/signup" exact component={Signup}/>
                <Route  path="/login" exact component={Login}/>
                <Route  path="/store" exact component={Store}/>
                <Route  path="/admin" exact component={Admin}/>
                <Route  path="/logout" exact component={Logout}/>
            </Switch>
        </Router>
    )
}

export default Routes;