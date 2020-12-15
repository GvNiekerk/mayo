import { Component } from "react";
import './card.css';
import App from './App';
import axios from 'axios';


import image from "./linda.jpg"
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import detaillist from "./detailedlisting";

var email = "";
var busName = "";
var cell = "";
var basicdesc = "";
var detaildesc = "";
var password = "";


class card extends Component 
{
    getListing(){
        var data = {"userEmail":"jan@janmail.com"};
        axios.post("http://localhost:3000/getlisting/getlisting", data,{ 
        })
        .then(res => {
          console.log(res.body);
        })
    }


    render()
    {
        return (
            <Router>
            <Link to = "/listing">
            <div className="card">
            <div className="upper container">
                <div className="image-container">
                    <img src={image} alt="" height="100px" width="100px" />
                </div>
            </div>
            <div >
                <h3 className="busname">Waynes Plumbing</h3>
                <h4>profesional plumbing services</h4>
                <p>Brits</p>
                <button>View profile</button>
                <h3 className="price">R400</h3>
                <h3 className="rate">p/h</h3>
            </div>
            {this.getListing()}
        </div>
        </Link>
        <Switch>
            <Route path= "/listing" component={detaillist} />
        </Switch>  

        </Router>
        );
    }
}
 export default card;