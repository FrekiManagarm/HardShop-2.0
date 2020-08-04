import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" to="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" to="/login">Connexion</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" to="/register">Inscription</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar