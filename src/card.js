import { Component } from "react";
import './card.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Detaillist from "./detailedlisting";




class card extends Component 
{
    constructor(props) {
        
        super(props);

        this.state = {
            showChild: true
          };
    }
    closeChild = () => {
        this.setState({
          showChild: false
        });
        window.location = ("/");
      };
    openListing(event) {
        window.location = ("/listing");
        
        
    }
             
    render()
    {
        return (
            
            <Router>
            {this.state.showChild&&
            <Switch>
            <Route exact path="/detaillisting" render={(props) => <Detaillist {...props} userMail={this.props.userEmail} onClose={this.closeChild} />} />
            </Switch>
             }
            
            <div className="card">
            <div className="upper container">
                <div className="image-container">
                    <img src={this.props.image}  alt="" height="100px" width="100px" />
                </div>
            </div>
            <div >
                <h2 className="busname">{this.props.companyName}</h2>
                <h4 className="service">{this.props.service}</h4>
                <p className="email">{this.props.userEmail} </p>
                <h3 className="price">{this.props.hourlyRate}</h3>
                <h3 className="rate">p/h</h3>
                <h3 className="buslocation">{this.props.city}, {this.props.suburb}</h3>
                <Link to="detaillisting"  type="submit"><button className="viewbtn">View Listing</button></Link>

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