import { Component } from "react";
import './App.css';
import { cookies } from './Main';

function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  var image64 = '';
  var imageName = "";
  var userActionEmail = "";
  var active = true;


class adminAccount extends Component 
{

    constructor(props)
    {
       super(props);
        //Vind uit oor logo 
       this.state = {
           email: '', 
           businessName: '', 
           cellNo: '', 
           website: '', 
           instagram: '', 
           twitter: '', 
           facebook: '', 
           basicDesc: '',  
           detailDesc: '', 
           hourlyRate: '',
           password: '',
           password2: ''
        };

       this.handleChange = this.handleChange.bind(this);
       this.RequestRegister = this.RequestRegister.bind(this);
    }

    handleChange(event){
        switch (event.target.name) {
            case 'email':
                this.setState({ email: event.target.value })
                break;
            case 'password':
                this.setState({ password: event.target.value })
                break;
            case 'password2':
                this.setState({ password2: event.target.value })
                break;
            case 'businessName':
                this.setState({ businessName: event.target.value })
                break;  
            case 'cellNo':
                this.setState({ cellNo: event.target.value })
                break; 
            case 'basicDesc':
                this.setState({ basicDesc: event.target.value })
                break; 
            case 'detailDesc':
                this.setState({ detailDesc: event.target.value })
                break; 
            case 'website':
                this.setState({ website: event.target.value })
                break;
            case 'instagram':
                this.setState({ instagram: event.target.value})
                break;
            case 'twitter':
                this.setState({ twitter: event.target.value})
                break;
            case 'facebook': 
                this.setState({ facebook: event.target.value})
                break;
            case 'hourlyRate':
                this.setState({ hourlyRate: event.target.value})
                break;
        }
    }

    ActivateAccount(event){
        event.preventDefault();

        var headers = new Headers();
        headers.append('Content-Type', 'application/json')



        userActionEmail = document.getElementById("userActionEmail").value;
        var req = {
            userEmail: userActionEmail
        }
        fetch("http://localhost:3000/active/activate", {
            method: "post",
            headers: headers,
            body: JSON.stringify(req),
        }).then((response)=>{
            console.log(response.body);
            if (response.ok){alert("User activated successfully");}
            else{alert("Error activating user") }
        })
    }

    DeactivateAccount(event){
        event.preventDefault();

        var headers = new Headers();
        headers.append('Content-Type', 'application/json')



        userActionEmail = document.getElementById("userActionEmail").value;
        var req = {
            userEmail: userActionEmail
        }
        fetch("http://localhost:3000/active/deactivate", {
            method: "post",
            headers: headers,
            body: JSON.stringify(req),
        }).then((response)=>{
            console.log(response.body);
            if (response.ok){alert("User Deactivated successfully");}
            else{alert("Error deactivating user") }
        })
    }

    
    //Changed name to correct naming syntax
    RequestRegister(event){
        event.preventDefault();

        var req = {
            userEmail: this.state.email,
            userPassword: this.state.password,
            userPassword2: this.state.password2,
            companyname: this.state.businessName,
            cellNum: this.state.cellNo,
            basicdesc: this.state.basicDesc,
            detaildesc: this.state.detailDesc,
            instagram: this.state.instagram,
            twitter: this.state.twitter,
            facebook: this.state.facebook,
            hourlyRate: this.state.hourlyRate,
            website: this.state.website,
            image64: this.image64,
            imageName: this.imageName,
            active: active
        }

        console.log(JSON.stringify(req));

        var headers = new Headers();
        headers.append('Content-Type', 'application/json')

        fetch("http://localhost:3000/auth/register", {
            method: "post",
            headers: headers,
            body: JSON.stringify(req),
        }).then((response) => {
            if (response.ok) {
                cookies.set('token', response.headers.get('auth-token'))
                alert("Success");
                window.location = ("/account");
            }
            else{
                alert("Invalid Login")
            }
        })
    }
    
    handleUpload(event) {
        event.preventDefault();

        let file = event.target.files[0]
        getBase64(file).then((base) => {
            image64 =  base.split(',')[1] 
            imageName = file.name
            console.log(image64, imageName)
        });
    }
    
    render()
    {
        return (
            <div className="App-header" >
              
                <div className="RegisterBox">
                    <h1>Admin</h1>

                   
                        <h3 className="admintxt"> Activate / Deactivate user</h3>
                        <h3 className="admintxt">Enter user email:</h3>
                        <input onChange={this.handleChange} name="userActionEmail" id="userActionEmail" className="whiteInput" placeholder="user Email" />
                        <button onClick={this.ActivateAccount} className="blueBtn" type="submit">Activate</button>
                        <button onClick={this.DeactivateAccount} className="blueBtn" type="submit">Deactivate</button>
                        <br/>

                    
                    <h3 className="admintxt">Add a new user</h3>
                    <input onChange={this.handleChange} name="email" id="emailtxt" className="whiteInput" placeholder="email" />
                    <input onChange={this.handleChange} name="businessName" id="bustxt"  className="whiteInput" placeholder="Company Name" />
                    <input onChange={this.handleChange} name="cellNo" id="celltxt"  className="whiteInput" placeholder="Contact Number" />
                    <input onChange={this.handleChange} name="website" id="webtxt"  className="whiteInput" placeholder="Company Website URL (www.example.com)" />
                    <input onChange={this.handleChange} name="instagram" id="instatxt"  className="whiteInput" placeholder="Instagram URL (www.instagram.com/example)" />
                    <input onChange={this.handleChange} name="twitter" id="twittertxt"  className="whiteInput" placeholder="Twitter URL (www.example.com)" />
                    <input onChange={this.handleChange} name="facebook" id="facetxt"  className="whiteInput" placeholder="Facebook URL (www.facebook.com/example)" />
                    <input onChange={this.handleChange} name="basicDesc" id="basictxt"  className="whiteInput" placeholder="Basic Description" />
                    <input onChange={this.handleChange} name="hourlyRate" id="hourlyrate"  className="whiteInput" placeholder="Hourly Rate" />
                    <textarea onChange={this.handleChange} rows="7" cols="50" name="detailDesc" id="detailtxt"  className="largeInput" placeholder="Detailed Description" />
                    <p>Choose company logo:</p>
                    <input onChange={this.handleUpload} type="file" className="fileup" name="file" />
                    <img id="test-image" style={{width: 200, height: 200 }} />
                    <p className="debittxt">Press the button below to download the debit order documents required to complete registration</p>
                    <button onClick={this.RequestRegister} className="blueBtn" type="submit">Download Documents</button>
                    <h4>email documents to: www.mayo.com</h4>
                    <input onChange={this.handleChange} name="password" id="passtxt"  className="whiteInput" placeholder="Password" type="password" />
                    <input onChange={this.handleChange} name="password2" id="pass2txt"  className="whiteInput" placeholder="Confirm Password" type="password" />
                    <button onClick={this.RequestRegister} className="blueBtn" type="submit">Register</button>
                 </div>



                 
            </div>
        );
    }
}
 export default adminAccount;