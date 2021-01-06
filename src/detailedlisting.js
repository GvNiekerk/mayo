import { Component } from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import face from './fb1.jpg';
import insta from './insta1.jpg';
import twit from './twit.jpg';


class detailedlisting extends Component 
{

    constructor(props){
     
        super(props);
        this.state={
            showMe:true
        }

    }

    facebookClick(event){
        window.open('https://www.facebook.com/cashcrusadershartbees')
    }

    instaClick(event){
        window.open('https://www.instagram.com/dewaldkokzero/')
    }

    twitClick(event){
        window.open('https://twitter.com/elonmusk/')
        
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
                <img onClick={() => this.facebookClick()} className="fb" src={face}/>
                <img onClick={() => this.instaClick()} className="fb" src={insta}/>
                <img onClick={() => this.twitClick()} className="fb" src={twit}/>
                </div>
                :null
            }
        </div>
        );
    }
}
 export default detailedlisting;