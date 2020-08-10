import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleEmailChange = event => {
        this.setState({ email: event.target.value }, () => {
            console.log(this.state)
        })
    }

    handlePasswordChange = event => {
        this.setState({ password: event.target.value }, () => {
            console.log(this.state)
        })
    }

    handleSubmit = event => {
        this.preventDefault()
        console.log('Connexion')
    }

    render() {
        return(
            <div>
                <NavBar/>
                <div class="container w-50">
                    <h2 class="text-center my-5">Connexion</h2>
                    <form method="POST" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input onChange={this.handleEmailChange} type="email" className="form-control" placeholder="rentrez votre nom" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" >Mot de passe</label>
                            <input onChange={this.handlePasswordChange} type="password" className="form-control" placeholder="rentrez le mot de passe" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary mb-10">Me connecter</button>
                    </form>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Login