import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import { Login } from "./pages/Login";
import { Home } from "./Home";
import {MiniDrawer} from './components/MyMenu'
import { Register } from "./pages/Register";


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/login'><Login /></Route>
                <Route exact path="/"><MiniDrawer /></Route>
                <Route exact path="/register"><Register /></Route>
                <Route exact path="/home"><Home /></Route>
            </Switch>

        </BrowserRouter>
    )
}


export default Routes;

