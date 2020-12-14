import { Component } from "react";
import './App.css';
import axios from 'axios';


class signup extends Component 
{
    register = () => {
        var data = {"_id":"5fd76adaef08a735b49b6d4a","userEmail":"kwert@anusmail.com","userPassword":"anus1235","companyname":"Anus dewald corp","basicdesc":"ons het dewald anusse","detaildesc":"ons het baie dewald anusse"};
        axios.post("http://localhost:3000/auth/register", data,{ 
        })
        .then(res => {
          alert(res);
          console.log(res);
          })
    }
    

    constructor(props)
     {
        super(props);
     }

    render()
    {
        return (
            <div className="App-header" >
              
                <div className="RegisterBox">
                    <h1>Register</h1>
                    <input onChange={this.handleChange} name="email" className="whiteInput" placeholder="email" />
                    <input onChange={this.handleChange} name="businessName" className="whiteInput" placeholder="Business Name" />
                    <input onChange={this.handleChange} name="cellNo" className="whiteInput" placeholder="Cellphone Number" />
                    <input onChange={this.handleChange} name="basicDesc" className="whiteInput" placeholder="Basic Description" />
                    <input onChange={this.handleChange} name="detailDesc" className="largeInput" placeholder="Detailed Description" />
                    <input onChange={this.handleChange} name="password" className="whiteInput" placeholder="Password" type="password" />
                    <button onClick={this.register} className="blueBtn" type="submit">Register</button>
                 </div>



                 
            </div>
        );
    }
}
 export default signup;