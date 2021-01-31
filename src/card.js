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

    openListing(event) {
        window.location = ("/listing");
        
        
    }
             
    render()
    {
        return (
            
            <Router>
            

            
            <div className="card">
            <div className="upper container">
                <div className="image-container">
                    <img src={image} alt="" height="100px" width="100px" />
                </div>
            </div>
            <div >
                <h3 className="busname">{this.props.companyName}</h3>
                <h4>profesional plumbing services</h4>
                <p>{this.props.userEmail} </p>
                <button onClick={this.openListing} className="greenBtn" type="submit">View Service</button>
                <h3 className="price">{this.props.hourlyRate}</h3>
                <h3 className="rate">p/h</h3>
            </div>
        </div>

        
        <Switch>
            <Route path= "/listing" component={detaillist} />
        </Switch>  

        </Router>

        
        );
    }
}
 export default card;