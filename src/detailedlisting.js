import { Component } from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import home from "./home";



class detailedlisting extends Component 
{

    RequestClose(event){
        window.alert("exit");
        <Router>
        <Link to = "/"></Link>
        <Switch>
            <Route path= "/" component={home} />
        </Switch>
        </Router>
    }

    constructor(props)
     {
        super(props);
     }

    render()
    {

        return (
        <div className="cards">
            <h3>Tel Number : 0854589784</h3>
            <h3>Email: waynesworld@gmail.com</h3>
            <button onClick={this.RequestClose} className="backknoppie">X</button>
		</div>
        );
    }
}
 export default detailedlisting;