import { Component } from "react";
import about from './about';
import signup from './signup';
import home from './home';
import recentview from './recentview';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


class Main extends Component 
{

    constructor(props)
     {
        super(props);
     }

    render()
    {
        return (
        <div className="App">
            
               <Router>
                <div>
                <Link to = "/">
                <button className="button-home">Home</button>
                </Link>
                <Link to = "/about">
                <button className="button-about">About Us</button>
                </Link>
                <Link to = "/signup">
                <button className="button-signup">Sign Up</button>
                </Link>
                <Link to = "/recentview">
                <button className="button-viewed">Recently viewed</button>
                </Link>
                </div>
                <div>
                
                </div>
            

            <Switch>
            <Route path= "/about" component={about} />
            <Route path= "/signup" component={signup}/>
            <Route path= "/" component={home}/>
            <Route path= "/recentview" component={recentview}/>
            </Switch>  
            </Router>
            
             
            
            </div>
        );
    }
}
 export default Main;