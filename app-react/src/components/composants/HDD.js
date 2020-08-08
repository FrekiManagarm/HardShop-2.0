import React from 'react'
import Header from '../NavBar'

class HDD extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return(
            <div>
                <Header/>
                Ceci est la page des HDD
            </div>
        )
    }
}

export default HDD