import { Component } from "react";
import './card.css';
import axios from 'axios';
import image from "./linda.jpg"
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import detaillist from "./detailedlisting";



class card extends Component 
{
    constructor(props) {
        super(props);
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
                <h3 className="busname">{this.props.companyName}</h3>
                <h4>profesional plumbing services</h4>
                <p>Brits </p>
                <button>View profile</button>
                <h3 className="price">R400</h3>
                <h3 className="rate">p/h</h3>
            </div>
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