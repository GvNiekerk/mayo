import './App.css';
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { cookies } from './Main';
import adminAccount from './adminAccount';

class adminLogin extends Component {
    constructor(props) {
        super(props);

        this.state = { adminEmail: '', adminPassword: '' }

        this.handleChange = this.handleChange.bind(this);
        this.RequestLogin = this.RequestLogin.bind(this);
    }

    handleChange(event) {
        switch (event.target.name) {
            case 'adminEmail':
                this.setState({ adminEmail: event.target.value })
                break;
            case 'adminPassword':
                this.setState({ adminPassword: event.target.value })
                break;
        }
    }

    RequestLogin(event) {
        event.preventDefault();

        var req = {

            adminEmail: document.getElementById('email').value,
            adminPassword: document.getElementById('password').value


        }

        var headers = new Headers();
        headers.append('Content-Type', 'application/json')

        fetch("http://localhost:3000/admin/login", {
            method: "post",
            headers: headers,
            body: JSON.stringify(req),
        }).then((response) => {
            console.log(response.headers.get('auth-token'));
            debugger
            if (response.ok) {
                cookies.set('token', response.headers.get('auth-token'))
                alert("Login successful")
                window.location = ("/adminAccount"); 
                
            }
            else {
                alert("Invalid Login")
            }
        })
    }
    
    render() {
        return (
            <div className="App-header">
                
                <h1>Admin Login</h1>
                <input onChange={this.handleChange} name="email" id="email" className="whiteInput" placeholder="email" />
                <br />
                <input onChange={this.handleChange} name="password" id="password" className="whiteInput" placeholder="password" type="password" />
                <br />
                <button onClick={this.RequestLogin} className="greenBtn" type="submit">Login</button>
                
                <Router>

                    <Switch>
                        <Route path="/adminAccount" component={adminAccount} />
                    </Switch>
                </Router>
            </div>
        );
    };
}


export default adminLogin;