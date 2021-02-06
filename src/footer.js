import { Component } from "react";
import face from './facebook-icon.svg';
import insta from './instagram-icon.svg';
import twit from './twitter-icon.png';
import email from './email-icon.png';
import signup from './signup';


class footer extends Component 
{

    constructor(props)
     {
        super(props);
     }

     topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }

      termsConditions() {
        window.location = ("/terms");

      }


    render()
    {
        return (
        <div className="footer" >
            
            
               <div>
                 </div>
                 <div>
                 <h2 className="footer-text">Contact us</h2>

                 <img onClick={() => this.facebookClick()} className="fbfoot" src={face}/>
                <img onClick={() => this.instaClick()} className="fbfoot" src={insta}/>
                <img onClick={() => this.twitClick()} className="fbfoot" src={twit}/>
                <img onClick={() => this.mailClick()} className="fbfoot" src={email}/>
                <br/>
                <h3 className="footer-text">A Product of MayoCompare(pty)</h3>
                <br/>

                <button className="search-btn" onClick={() => this.termsConditions()} type="button">T's & C's</button>
                <button className="search-btn" onClick={() => this.topFunction()} type="button">Back to top</button>



                 </div>
 
            </div>
        );
    }
}
 export default footer;