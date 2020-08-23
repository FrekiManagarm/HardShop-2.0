import React from 'react'
import Header from '../NavBar'
import Footer from '../Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Nav } from 'react-bootstrap'


class CRUD extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return(
            <div>
                <Header/>
                    <Router>
                        <Nav variant="tabs">
                            <Nav.Item>
                                <Nav.Link href="/CRUD/Case">Case</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/CRUD/Cooling">Cooling</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/CRUD/HDD">HDD</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/CRUD/SSD">SSD</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/CRUD/MotherBoard">Carte Mère</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/CRUD/PSU">Alimentation</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/CRUD/CPU">Processeur</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/CRUD/RAM">Mémoire</Nav.Link>
                            </Nav.Item>
                        </Nav>


                        <Switch>
                            <Route>
                                
                            </Route>
                        </Switch>
                    </Router>
                <Footer/>
            </div>
        )
    }
}

export default CRUD