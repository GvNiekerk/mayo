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
                    <input onChange={this.handleChange} name="businessName" id="bustxt"  className="whiteInput" placeholder="Company Name" />
                    <input onChange={this.handleChange} name="cellNo" id="celltxt"  className="whiteInput" placeholder="Contact Number" />
                    <input onChange={this.handleChange} name="cellNo" id="celltxt"  className="whiteInput" placeholder="Company Website URL (www.example.com)" />
                    <input onChange={this.handleChange} name="cellNo" id="celltxt"  className="whiteInput" placeholder="Instagram URL (www.instagram.com/example)" />
                    <input onChange={this.handleChange} name="cellNo" id="celltxt"  className="whiteInput" placeholder="Twitter URL (www.example.com)" />
                    <input onChange={this.handleChange} name="cellNo" id="celltxt"  className="whiteInput" placeholder="Facebook URL (www.facebook.com/example)" />
                    <input onChange={this.handleChange} name="basicDesc" id="basictxt"  className="whiteInput" placeholder="Basic Description" />
                    <textarea onChange={this.handleChange} rows="7" cols="50" name="detailDesc" id="detailtxt"  className="largeInput" placeholder="Detailed Description" />
                    <p>Choose company logo:</p>
                    <input type="file" className="fileup" name="file" />
                    <p className="debittxt">Press the button below to download the debit order documents required to complete registration</p>
                    <button onClick={this.RequestRegister} className="blueBtn" type="submit">Download Documents</button>
                    <h4>email documents to: www.mayo.com</h4>
                    <input onChange={this.handleChange} name="password" id="passtxt"  className="whiteInput" placeholder="Password" type="password" />
                    <input onChange={this.handleChange} name="password" id="passtxt"  className="whiteInput" placeholder="Confirm Password" type="password" />
                    <button onClick={this.RequestRegister} className="blueBtn" type="submit">Register</button>
                 </div>



                 
            </div>
        );
    }
}
 export default signup;