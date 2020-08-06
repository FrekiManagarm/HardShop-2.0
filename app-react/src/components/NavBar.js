import React from 'react'
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap'

class Header extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return(
            <>
                <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
                    <a href="/" className="navbar-brand">
                        <img src="https://i.imgur.com/9kR20Nx.png" alt="Logo"/>
                    </a>
                </Navbar>
            </>
        )
    }
}

export default Header