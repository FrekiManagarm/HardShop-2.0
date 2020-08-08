import React from 'react'
import Header from '../NavBar'

class RAM extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return(
            <div>
                <Header/>
                Ceci est la page de la RAM
            </div>
        )
    }
}

export default RAM