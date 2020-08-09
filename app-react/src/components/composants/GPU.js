import React from 'react'
import Header from '../NavBar'
import Footer from '../Footer'

class GPU extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return(
            <div>
                <Header/>
                ceci est la page GPU
                <Footer/>
            </div>
        )
    }
}

export default GPU