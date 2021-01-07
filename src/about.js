import { Component } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import signup from './signup';


class about extends Component 
{

    constructor(props)
     {
        super(props);
     }

    render()
    {
        return (
        <div className="App">
            
            
               <div>
                 </div>
                 <div>
                 <h2 className = "heading">About us</h2>
                 <p className = "para">
                     <b>
                    Yes...
                    I thought about that as well
                    I understand that when you need something done, wheter it's plumbing, seeing a doctor or even cosmetics and the list goes on, you will probaply spend most of your time finding the right one, at the best price possible.
                    with the click of a button you will now be able to find any service you need deliverd (relevant to your area too) and to make things even better their basic prices will also be listed for you, to ensure that you are taking an informed decision.
                    <br/>
                    <br/>
                    How does it work?
                    I would only be charging an Admin fee of R250 p/m and then invoice you per click of R0.47 so essentially the most a single user could cost you for using me is just R2.82. 
                    At that amount per user viewing your services the only question left to ask would be, why not Mayo?
                    <br/>
                    Let me help you increase your publicity and profits.
                    It’s as simple as downloading a few documents signing them and then emailing it back to me for verification and then you’re sorted.
                    <br/>
                    <Router>
                    <Link to = "/signup">
                    <button onClick={this.RequestRegister} className="aboutbtn" type="submit">Register</button>
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