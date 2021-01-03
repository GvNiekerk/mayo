import { Component } from "react";
import './App.css';
import axios from 'axios';

var email = "";
var busName = "";
var cell = "";
var basicdesc = "";
var detaildesc = "";
var password = "";


class signup extends Component 
{
    //Changed name to correct naming syntax
    RequestRegister = () => {
        email = document.getElementById('emailtxt').value;
        busName = document.getElementById('bustxt').value;
        cell = document.getElementById('celltxt').value;
        basicdesc = document.getElementById('basictxt').value;
        detaildesc = document.getElementById('detailtxt').value;
        password = document.getElementById('passtxt').value;

        var data = {"userEmail":email,"userPassword":password,"companyname":busName,"basicdesc":basicdesc,"detaildesc":detaildesc};
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
                    <input onChange={this.handleChange} name="email" id="emailtxt" className="whiteInput" placeholder="email" />
                    <input onChange={this.handleChange} name="businessName" id="bustxt"  className="whiteInput" placeholder="Business Name" />
                    <input onChange={this.handleChange} name="cellNo" id="celltxt"  className="whiteInput" placeholder="Cellphone Number" />
                    <input onChange={this.handleChange} name="basicDesc" id="basictxt"  className="whiteInput" placeholder="Basic Description" />
                    <textarea onChange={this.handleChange} rows="6" cols="40" name="detailDesc" id="detailtxt"  className="largeInput" placeholder="Detailed Description" />
                    <input onChange={this.handleChange} name="password" id="passtxt"  className="whiteInput" placeholder="Password" type="password" />
                    <button onClick={this.RequestRegister} className="blueBtn" type="submit">Register</button>
                 </div>



                 
            </div>
        );
    }
}
 export default signup;