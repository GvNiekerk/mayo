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

    render()
    {
        return (
        <div className="footer" >
            
            
               <div>
                 </div>
                 <div>
                 <h2 className="footerbutton">about</h2>
                 <h2 className="footerbutton">Contact us</h2>
                 <h2 className="footpar">Hippo Comparative Services (Pty) Ltd is an authorised financial service provider. FSP number: 16357. Block A, Steyn City Capital Park, Erling Road, Riverglen, Dainfern, 2191.</h2>

                 <img onClick={() => this.facebookClick()} className="fb" src={face}/>
                <img onClick={() => this.instaClick()} className="fb" src={insta}/>
                <img onClick={() => this.twitClick()} className="fb" src={twit}/>
                <img onClick={() => this.mailClick()} className="fb" src={email}/>
                <h2 className="footerbutton">Tell : 072 041 7854 </h2>


                 </div>
 
            </div>
        );
    }
}
 export default footer;