import { Component } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import signup from './signup';


class about extends Component 
{

    constructor(props)
     {
        super(props);
     }
    //Button function that does nothing????
    render()
    {
        return (
        <div className="App">
             
            
               <div>
                 </div>
                 <div>
                 <h2 className = "aboutheading">About us</h2>
                 <p className = "para">
                     <b>
                        We’ve got you sorted!
                        We understand that when you need something done, you’ll probably spend most of the time
                        finding the right person at the best possible price. Whether you need a plumber, hair dresser
                        or even a nail technician, we’ve got you covered! With the click of a button you will be able
                        to find any service you need delivered in your area. To make things even more convenient –
                        each provider’s base rates for certain services will be listed to help you make an informed
                        comparison and decision.
                    <br/>
                    <br/>
                        Looking to advertise on our site, and gain the exposure you need for you business? Please don't hesitate
                        to contact us and learn about the process.
                    <br/>
                        Contact: 0840118110 to learn more information
                    <br/>
                    
                    <Router>
                    <Link to = "/signup">
                    <button onClick={this.RequestRegister} className="loginBtn" type="submit">Register</button>
                    </Link>

                    <Switch>
                    <Route path= "/signup" component={signup} />
                    </Switch>
                    </Router>

                    <br/>
                    <br/>
                    </b>
                 </p>
                 
                 </div>
 
            </div>
        );
    }
}
 export default about;