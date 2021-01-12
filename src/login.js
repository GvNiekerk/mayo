import './App.css';
import { Component } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import signup from './signup';
import Cookies from 'universal-cookie';
import account from './account';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = { userEmail: '', userPassword: ''}

        this.handleChange = this.handleChange.bind(this);
        this.RequestLogin = this.RequestLogin.bind(this);
    }

    handleChange(event){
        switch (event.target.name) {
            case 'userEmail':
                this.setState({ userEmail: event.target.value })
                break;
            case 'userPassword':
                this.setState({ userPassword: event.target.value })
                break;
        }
    }

    RequestLogin(event) {
        event.preventDefault();

        var req = {
            
                userEmail : document.getElementById('email').value,
                userPassword : document.getElementById('password').value
                
            
        }

        console.log(JSON.stringify(req));

        var headers = new Headers();
        headers.append('Content-Type', 'application/json')

        fetch("http://localhost:3000/auth/login", {
            method: "post",
            headers: headers,
            body: JSON.stringify(req),
        }).then((response) => {
            console.log(response);
            if (response.ok) {
                const cookies = new Cookies();
                cookies.set('token', response.headers.get('auth-token'), { path: "/login" })
                
               alert("Login successful")
            }
            else{
                alert("Invalid Login")
            }
        })
    }

render() {
    return (
        <div className="App-header">
            
            <h1>Login</h1>
                <input onChange={this.handleChange} name="email" id="email"  className="whiteInput" placeholder="email" />
                <br />
                <input onChange={this.handleChange} name="password" id="password" className="whiteInput" placeholder="password" type="password" />
                <br />
                <button onClick={this.RequestLogin} className="greenBtn" type="submit">Login</button>
                <Router>
                <Link to = "/signup">
                <button onClick={this.RequestRegister} className="blueBtn" type="submit">Register</button>
                </Link>

                <Switch>
                <Route path= "/signup" component={signup} />
                <Route path= "/account" component={account}/>
                </Switch>
                </Router>
        </div>
    );
};
}

export default Login;