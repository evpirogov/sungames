import React from "react"
import {Redirect, Route, Switch} from "react-router-dom";
import MainPage from "./pages/MainPage";
import GamePage from "./pages/GamePage";
import Dashboard from "./pages/Dashboard";

export const Routes = () => {

  return (
    <Switch>
      <Route path="/" exact>
        <MainPage/>
      </Route>
      <Route path="/game" exact>
        <GamePage/>
      </Route>
      <Route path="/dashboard" exact>
        <Dashboard/>
      </Route>
      <Redirect to="/"/>
    </Switch>
  )
}