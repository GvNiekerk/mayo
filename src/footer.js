import { Component } from "react";
import face from './fb1.jpg';
import insta from './insta1.jpg';
import twit from './twit.jpg';
import email from './email1.png';
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
                 <h2 className="foot">Contact us</h2>

                 <img onClick={() => this.facebookClick()} className="fbfoot" src={face}/>
                <img onClick={() => this.instaClick()} className="fbfoot" src={insta}/>
                <img onClick={() => this.twitClick()} className="fbfoot" src={twit}/>
                <img onClick={() => this.mailClick()} className="fbfoot" src={email}/>
                <br/>
                <h3>A Product of MayoCompare(pty)</h3>
                <br/>

                <button className="search-btn" onClick={() => this.termsConditions()} type="button">Terms and conditions</button>
                <button className="search-btn" onClick={() => this.topFunction()} type="button">Back to top</button>



                 </div>
 
            </div>
        );
    }
}
 export default footer;