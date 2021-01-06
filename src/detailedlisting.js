import { Component } from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import homePage from "./home";



class detailedlisting extends Component 
{

    constructor(props){
     
        super(props);
        this.RequestClose = this.RequestClose.bind(this);
    }


    RequestClose(event){
        //window.alert("exit");
        return( <homePage/>
        );
    }

    render()
    {

        return (
        <div className="cards">
            <h3>Tel Number : 0854589784</h3>
            <h3>Email: waynesworld@gmail.com</h3>
            <button onClick={() => this.RequestClose} className="backknoppie"> X</button>
		</div>
        );
    }
}
 export default detailedlisting;