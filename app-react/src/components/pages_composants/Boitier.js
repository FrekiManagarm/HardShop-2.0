import React from 'react'
import { Card, CardDeck, Button } from 'react-bootstrap'
import Header from '../NavBar'
import Footer from '../Footer'
import Axios from 'axios'

class Boitier extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <Header/>
                <CardDeck>

                </CardDeck>
                <Footer/>
            </div>
        )
    }
}

export default Boitier