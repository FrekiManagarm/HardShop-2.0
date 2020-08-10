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
            <header>
            <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
          <a href="/" className="navbar-brand">
            <img src="https://i.imgur.com/9kR20Nx.png" alt="Logo" />
          </a>
          <Navbar.Brand href="/">HardShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              
              <NavDropdown title="Composants" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/CPU">Processeur</NavDropdown.Item>
                <NavDropdown.Item href="/Motherboard">
                  Carte Mère
                </NavDropdown.Item>
                <NavDropdown.Item href="/RAM">RAM</NavDropdown.Item>
                <NavDropdown.Item href="/GPU">Carte Graphique</NavDropdown.Item>
                <NavDropdown.Item href="/Refroidissement">
                  Refroidissement
                </NavDropdown.Item>
                <NavDropdown.Item href="/SSD">SSD</NavDropdown.Item>
                <NavDropdown.Item href="/PSU">Alimentation PC</NavDropdown.Item>
                <NavDropdown.Item href="/Boitier">Boîtier</NavDropdown.Item>
                <NavDropdown.Item href="/HDD">HDD</NavDropdown.Item>
                <NavDropdown.Item href="">OS</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/News">News</Nav.Link>
              <Nav.Link href="/Configuration">Configuration</Nav.Link>
              <NavDropdown title="Paramètres" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/boutique">Boutique</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/CRUDs">
                  CRUD
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                <Nav.Link href="/login">Connexion</Nav.Link>
                <Nav.Link href="/register">S'inscrire</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
        )
    }
}

export default Header