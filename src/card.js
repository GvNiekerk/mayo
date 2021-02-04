import { Component } from "react";
import './card.css';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Detaillist from "./detailedlisting";



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
            
            <Switch>
            <Route exact path="/detaillisting" render={(props) => <Detaillist {...props} id={props.userEmail} />} />
            </Switch>
            
            <div className="card">
            <div className="upper container">
                <div className="image-container">
                    <img src={this.props.image} alt="" height="100px" width="100px" />
                </div>
            </div>
            <div >
                <h3 className="busname">{this.props.companyName}</h3>
                <h4 className="service">{this.props.service}</h4>
                <p>{this.props.userEmail} </p>
                <Link to="detaillisting" className="greenBtn" type="submit">View Service</Link>
                <h3 className="price">{this.props.hourlyRate}</h3>
                <h3 className="rate">p/h</h3>
                <h3 className="location">{this.props.city}, {this.props.suburb}</h3>
            </div>
        </div>

        
        <Switch>
            <Route path= "/listing" component={Detaillist} />
        </Switch>  

        </Router>

        
        );
    }
}
 export default card;