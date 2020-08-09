import React from 'react'
import Header from '../NavBar'
import Footer from '../Footer'

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
                <Footer/>
            </div>
        )
    }
}

export default HDD