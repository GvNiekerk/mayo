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

    render()
    {
        return (
        <div className="footer" >
            
            
               <div>
                 </div>
                 <div>
                 <h2 className="foot">Contact us</h2>
                 <h2 className="footpar">Hippo Comparative Services (Pty) Ltd is an authorised financial service provider. FSP number: 16357. Block A, Steyn City Capital Park, Erling Road, Riverglen, Dainfern, 2191.</h2>

                 <img onClick={() => this.facebookClick()} className="fbfoot" src={face}/>
                <img onClick={() => this.instaClick()} className="fbfoot" src={insta}/>
                <img onClick={() => this.twitClick()} className="fbfoot" src={twit}/>
                <img onClick={() => this.mailClick()} className="fbfoot" src={email}/>
                <br/>
                <br/>
                <button className="search-btn" onClick={() => this.topFunction()} type="button">Back to top</button>



                 </div>
 
            </div>
        );
    }
}
 export default footer;