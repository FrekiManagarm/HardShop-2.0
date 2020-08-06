import React from 'react'
import NavBar from './NavBar'
import Header from './NavBar'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return(
            <div>
                <Header/>
                <div className="jumbotron">
                    <h1 className="display-4">Bonjour et bienvenue au site du HardShop version 2.0</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a className="btn btn-primary btn-lg" to="/" role="button">Learn more</a>
                </div>
            </div>

        )
    }
}

export default Home