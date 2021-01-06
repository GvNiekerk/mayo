import { Component } from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import face from './fb1.jpg';
import insta from './insta1.jpg';
import twit from './twit.jpg';
import email from './email1.png';

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

    mailClick(event){
        window.open('https://twitter.com/elonmusk/')
        
    }
    webClick(event){
        window.open('www.facebook.com')
        
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
                <h3 >Waynes world is a specilized electrician service specializing in vibrator rewiring and batery replacements aswell as a profesional plumbing service to fix your toilets and pipes in your home</h3>
                <h3>Tel Number : 0854589784</h3>
                <h4><u>Estimated prices :</u></h4>
                <dl className = "estimateprice">
                    Geyser Fix      -     R400
                    <br></br> Pipe Fix     -   R300
                    <br></br>Toilet Fix  -    R200
                </dl>
                
                <button onClick={() => this.RequestClose()} className="backknoppie">X</button>
                <img onClick={() => this.facebookClick()} className="fb" src={face}/>
                <img onClick={() => this.instaClick()} className="fb" src={insta}/>
                <img onClick={() => this.twitClick()} className="fb" src={twit}/>
                <img onClick={() => this.mailClick()} className="fb" src={email}/>
                <a className="hyperlink" href="url" onClick={() => this.webClick()}><b>www.facebook.com</b></a>

                </div>
                :null
            }
        </div>
        );
    }
}
 export default detailedlisting;