import React from 'react'
import Header from '../NavBar'

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
            </div>
        )
    }
}

export default Refroidissement