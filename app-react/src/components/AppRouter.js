import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'

class AppRouter extends React.Component {
    render() {
        return(
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route/>
            </Switch>
        )
    }
}

export default AppRouter