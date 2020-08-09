import React from 'react'
import Header from '../NavBar'
import Footer from '../Footer'

class Refroidissement extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return(
            <div>
                <Header/>
                Ceci est la page des Refroidissement
                <Footer/>
            </div>
        )
    }
}

export default Refroidissement