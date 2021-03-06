import React from "react"
import { Route, Switch } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>

    )
}

export default Routes