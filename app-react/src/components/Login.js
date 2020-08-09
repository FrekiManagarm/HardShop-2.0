import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return(
            <div>
                <NavBar/>
                <div class="container w-50">
                    <h2 class="text-center my-5">Enregistrement</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" >Mot de passe</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Se souvenir de moi</label>
                        </div>
                        <button type="submit" className="btn btn-primary mb-10">Submit</button>
                    </form>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Login