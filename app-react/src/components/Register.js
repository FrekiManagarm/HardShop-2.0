import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: '',
            confirm_password: '',
            redirect: false
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

        let bodyFormData = new FormData()
        bodyFormData.set('name', this.state.name)
        bodyFormData.set('email', this.state.email)
        bodyFormData.set('password', this.state.password)
        bodyFormData.set('confirm_password', this.state.confirm_password)

        Axios.post('http://127.0.0.1:8000/api/register', bodyFormData)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.api_token)
                this.setState({ redirect: true })
            })
            .catch(error => {
                console.log(error.response)
            })
    }

    render() {
        if(this.state.redirect) {
            return (<Redirect to="/"/>)
        }
        return(
            <div>
                <NavBar/>
                <div class="container w-50">
                    <h2 class="text-center my-5 mb-5">Inscription</h2>
                    <form method="POST" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Nom</label>
                            <input onChange={this.handleNameChange} type="text" className="form-control" id="exampleInputEmail1" placeholder="renseignez votre nom" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Adresse E-mail</label>
                            <input onChange={this.handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" placeholder="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Mot de passe</label>
                            <input onChange={this.handlePasswordChange} type="password" className="form-control" placeholder="mot de passe" id="exampleInputPassword1" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Confirmer le mot de passe</label>
                            <input onChange={this.handleConfirm_PasswordChange} type="password" className="form-control" id="exampleInputEmail1" placeholder="confirmez le mot de passe" aria-describedby="emailHelp" />
                        </div>
                        <button type="submit" className="btn btn-primary mb-10">S'inscrire</button>
                    </form>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Register