import React from 'react'
import Header from '../NavBar'
import Footer from '../Footer'

class SSD extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return(
            <div>
                <Header/>
                Ceci est la page des SSD
                <Footer/>
            </div>
        )
    }
}

export default SSD