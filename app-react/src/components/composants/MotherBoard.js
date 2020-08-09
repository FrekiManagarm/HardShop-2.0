import React from 'react'
import Header from '../NavBar'
import Footer from '../Footer'

class MotherBoard extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return(
            <div>
                <Header/>
                Ceci est la page Carte Mère
                <Footer/>
            </div>
        )
    }
}

export default MotherBoard