import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: '',
            confirm_password: ''
        }
    }

    handleNameChange = event => {
        this.setState({ name : event.target.value }, () => {
            console.log(this.state)
        })
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

    handleConfirm_PasswordChange = event => {
        this.setState({ confirm_password: event.target.value }, () => {
            console.log(this.state)
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log('inscription')
    }

    render() {
        return(
            <div>
                <NavBar/>
                <div class="container w-50">
                    <h2 class="text-center my-5 mb-5">Inscription</h2>
                    <form method="POST" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Nom</label>
                            <input onChange={this.handleNameChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Adresse E-mail</label>
                            <input onChange={this.handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Mot de passe</label>
                            <input onChange={this.handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Retaper le mot de passe</label>
                            <input onChange={this.handleConfirm_PasswordChange} type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <button type="submit" className="btn btn-primary mb-10">S'enregistrer</button>
                    </form>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Register