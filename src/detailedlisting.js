import { Component } from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import homePage from "./home";
import home from "./home";



class detailedlisting extends Component 
{

    constructor(props){
     
        super(props);
        this.state={
            showMe:true
        }

    }


    RequestClose(event){
        this.setState({
            showMe:false
        })
    }

    render()
    {

        return (
        <div>
            {this.state.showMe?
                <div className="cards">
                <h3>Tel Number : 0854589784</h3>
                <h3>Email: waynesworld@gmail.com</h3>
                <button onClick={() => this.RequestClose()} className="backknoppie">X</button>
                </div>
                :null
            }
        </div>
        );
    }
}
 export default detailedlisting;