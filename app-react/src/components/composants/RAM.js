import React from 'react'
import Header from '../NavBar'
import Footer from '../Footer'

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
                <Footer/>
            </div>
        )
    }
}

export default RAM