import './App.css';
import { Component } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import signup from './signup';


class Login extends Component {



render() {
    return (
        <div className="App-header">
            
            <h1>Login</h1>
                <input onChange={this.handleChange} name="email" className="whiteInput" placeholder="email" />
                <br />
                <input onChange={this.handleChange} name="password" className="whiteInput" placeholder="password" type="password" />
                <br />
                <button onClick={this.RequestLogin} className="greenBtn" type="submit">Login</button>
                <Router>
                <Link to = "/signup">
                <button onClick={this.RequestRegister} className="blueBtn" type="submit">Register</button>
                </Link>

                <Switch>
                <Route path= "/signup" component={signup} />
                </Switch>
                </Router>
        </div>
    );
};
}

export default Login;