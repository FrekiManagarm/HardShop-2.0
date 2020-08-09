import React from 'react'
import Header from '../NavBar'
import Footer from '../Footer'

class CPU extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                    <div className="mb-10 text-center">
                        ceci est la page CPU
                    </div>
                <Footer/>
            </div>
        )
    }
}

export default CPU
