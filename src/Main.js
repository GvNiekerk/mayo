import { Component } from "react";
import about from './about';
import signup from './signup';
import home from './home';
import recentview from './recentview';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import login from './login';


class Main extends Component 
{

    constructor(props)
     {
        super(props);
     }

    render()
    {
        return (
        <div className = "navhead">
               <h1 className="names">Mayo</h1>
               <Router>
                <Link to = "/">
                <button className="button-home">Home</button>
                </Link>
                <Link to = "/about">
                <button className="button-about">About Us</button>
                </Link>
                <Link to = "/login">
                <button className="button-signup">Login</button>
                </Link>
                <Link to = "/recentview">
                <button className="button-viewed">Recently viewed</button>
                </Link>
               
                <div>
                
                </div>
            

            <Switch>
            <Route path= "/about" component={about} />
            <Route path= "/login" component={login}/>
            <Route path= "/recentview" component={recentview}/>

            <Route  path= "/" component={home}/>
            </Switch>  
            </Router>
            
             
            
            </div>
        );
    }
}
 export default Main;