import React from 'react'
import Header from '../NavBar'
import Footer from '../Footer'

class Boitier extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return(
            <div>
                <Header/>
                    <div className="mb-10 text-center">
                        Ceci est la page des Boitiers
                    </div>
                <Footer/>
            </div>
        )
    }
}

export default Boitier