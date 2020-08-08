import React from 'react'
import Header from '../NavBar'

class Boitier extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return(
            <div>
                <Header/>
                Ceci est la page des Boitiers
            </div>
        )
    }
}

export default Boitier