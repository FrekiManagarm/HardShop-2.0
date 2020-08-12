import React from 'react'
import { Redirect } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import Axios from 'axios'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            redirect: false,
            errors: []
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

        let bodyFormData = new FormData()
        bodyFormData.set('email', this.state.email)
        bodyFormData.set('password', this.state.password)

        Axios.post('http://127.0.0.1:8000/api/login', bodyFormData)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.api_token)
                this.setState({ redirect: true })
            })
            .catch(error => {
                if(error.response.status === 401) {
                    this.setState({ errors: error.response.data.errors }, () => {
                        console.log(this.state)
                    })
                }
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
                    <h2 class="text-center my-5">Connexion</h2>
                    <form method="POST" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input onChange={this.handleEmailChange} type="email" className="form-control" placeholder="rentrez votre email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            { this.state.errors && this.state.errors.email ? <div className="invalid-feedback text-danger">{ this.state.errors['email']}</div> : '' }
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" >Mot de passe</label>
                            <input onChange={this.handlePasswordChange} type="current-password" className="form-control" placeholder="rentrez le mot de passe" id="exampleInputPassword1" />
                            { this.state.errors && this.state.errors.password ? <div className="invalid-feedback text-danger">{ this.state.errors['password']}</div> : '' }
                        </div>
                        <button type="submit" onSubmit={this.handleSubmit} className="btn btn-primary mb-10">Me connecter</button>
                    </form>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Login