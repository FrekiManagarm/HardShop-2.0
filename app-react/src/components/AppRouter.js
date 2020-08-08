import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Header from './NavBar'
import CPU from './composants/CPU'
import GPU from './composants/GPU'
import HDD from './composants/HDD'
import Refroidissement from './composants/Refroidissement'
import Boitier from './composants/Boitier'
import SSD from './composants/SSD'
import RAM from './composants/RAM'
import MotherBoard from './composants/MotherBoard'

class AppRouter extends React.Component {
    render() {
        return(
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route path="/Navbar" component={Header}/>
                <Route path="/CPU" component={CPU}/>
                <Route path="/GPU" component={GPU}/>
                <Route path="/HDD" component={HDD}/>
                <Route path="/Refroidissement" component={Refroidissement}/>
                <Route path="/SSD" component={SSD}/>
                <Route path="/Boitier" component={Boitier}/>
                <Route path="/RAM" component={RAM}/>
                <Route path="/Motherboard" component={MotherBoard}/>
            </Switch>
        )
    }
}

export default AppRouter