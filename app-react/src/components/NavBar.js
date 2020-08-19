import React from 'react'
import { Navbar, NavDropdown, Nav, Button } from 'react-bootstrap'

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
          token: null
        }
    }

    logout = () => {
      localStorage.setItem('token', '')
      localStorage.clear()
      this.setState({ token: null })
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
                {
                  localStorage.getItem('token')
                  ?
                  <div>
                    <Button href="/Photo">Photo</Button>
                    <Button className="btn ml-1" onClick={() => this.logout()}>Déconnexion</Button>
                  </div>
                  :
                  <div>
                    <Button href="/register">S'inscrire</Button>
                    <Button className="ml-1" href="/login">Connexion</Button>
                  </div>
                  
                }
                
                
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
        )
    }
}

export default Header