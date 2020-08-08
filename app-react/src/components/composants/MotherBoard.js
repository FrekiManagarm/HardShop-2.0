import React from 'react'
import Header from '../NavBar'

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
            </div>
        )
    }
}

export default MotherBoard