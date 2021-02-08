import { Component } from "react";
import './App.css';
import axios from 'axios';
import { cookies } from './Main';
import account from './account';

class signup extends Component {

    constructor(props) {
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
            image64: '',
            imageName: '',
            adress:'',
            service:'',
            active: false,
            suburb: '',
            city: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.RequestRegister = this.RequestRegister.bind(this);
    }

    handleChange(event) {
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
                this.setState({ instagram: event.target.value })
                break;
            case 'twitter':
                this.setState({ twitter: event.target.value })
                break;
            case 'facebook':
                this.setState({ facebook: event.target.value })
                break;
            case 'hourlyRate':
                this.setState({ hourlyRate: event.target.value })
                break;
            case 'adress':
                this.setState({ adress: event.target.value })
                break;
            case 'service':
                 this.setState({ service: event.target.value })
                break;  
            case 'suburb':
                this.setState({ suburb: event.target.value})
                break;
            case 'city':
                this.setState({ city: event.target.value})
                break;  
        }
    }

    //Changed name to correct naming syntax
    RequestRegister(event) {
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
            image64: this.state.image64,
            imageName: this.state.imageName,
            adress: this.state.adress,
            service: this.state.service,
            active: this.state.active,
            suburb: this.state.suburb,
            city: this.state.city
        }
        debugger

        console.log(JSON.stringify(req));

        var headers = new Headers();
        headers.append('Content-Type', 'application/json')

        fetch("http://mayocompare.co.za/auth/register", {
            method: "post",
            headers: headers,
            body: JSON.stringify(req),
        }).then((response) => {
            if (response.ok) {
                cookies.set('token', response.headers.get('auth-token'))
                alert("Success");
                window.location = ("/account");
            }
            else {
                alert("Invalid Login")
            }
        })
    }

    handleUpload = (event) => {
        event.preventDefault();

        let file = event.target.files[0]
        this.getBase64(file).then((base) => {
            this.handleBase64(file, base);
        });
    }

    handleBase64 = (file, base) => {
        this.state.image64 = base
        this.state.imageName = file.name
        document.getElementById('test-image').setAttribute('src', base);
    }

    getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    render() {
        return (
            <div className="App-header" >

                <div className="RegisterBox">
                    <h1 className = "headingregister">Register</h1>
                    <input onChange={this.handleChange} name="email" id="emailtxt" className="whiteInput" placeholder="email" />
                    <input onChange={this.handleChange} name="businessName" id="bustxt" className="whiteInput" placeholder="Company Name" />
                    <select name="service" className="dropbox" value={this.state.value} onChange={this.handleChange}>
                        <option >-Select Service-</option>
                        <option value="Plumbing">Plumbing</option>
                        <option value="Electrical">Electrical</option>
                        <option value="Gardening">Gardening</option>
                        <option value="Construction">Construction</option>
                    </select>
                    <input onChange={this.handleChange} name="cellNo" id="celltxt" className="whiteInput" placeholder="Contact Number" />
                    <input onChange={this.handleChange} name="website" id="webtxt" className="whiteInput" placeholder="Company Website URL (www.example.com)" />
                    <input onChange={this.handleChange} name="instagram" id="instatxt" className="whiteInput" placeholder="Instagram URL (www.instagram.com/example)" />
                    <input onChange={this.handleChange} name="twitter" id="twittertxt" className="whiteInput" placeholder="Twitter URL (www.example.com)" />
                    <input onChange={this.handleChange} name="facebook" id="facetxt" className="whiteInput" placeholder="Facebook URL (www.facebook.com/example)" />
                    <input onChange={this.handleChange} name="adress" id="adresstxt" className="whiteInput" placeholder="The adress of your business/service" />
                    <input onChange={this.handleChange} name="suburb" id="suburbtxt" className="whiteInput" placeholder="Suburb where your business/service is located" />
                    <input onChange={this.handleChange} name="city" id="citytxt" className="whiteInput" placeholder="City where your business/service is located" />
                    <input onChange={this.handleChange} name="basicDesc" id="basictxt" className="whiteInput" placeholder="Basic Description" />
                    <input onChange={this.handleChange} name="hourlyRate" id="hourlyrate" className="whiteInput" placeholder="Hourly Rate" />
                    <textarea onChange={this.handleChange} rows="7" cols="50" name="detailDesc" id="detailtxt" className="largeInput" placeholder="Detailed Description" />
                    <p className="debittxt">Choose company logo:</p>
                    <input onChange={this.handleUpload} type="file" className="fileup" name="file" />
                    <img id="test-image" style={{width: 200, height: 200 }} />
                    <p className="debittxt">Press the button below to download the debit order documents required to complete registration</p>
                    <button onClick={this.RequestRegister} className="blueBtn" type="submit">Download Documents</button>
                    <h4 className = "debittxt">email documents to: www.mayo.com</h4>
                    <input onChange={this.handleChange} name="password" id="passtxt" className="whiteInput" placeholder="Password" type="password" />
                    <input onChange={this.handleChange} name="password2" id="pass2txt" className="whiteInput" placeholder="Confirm Password" type="password" />
                    <button onClick={this.RequestRegister} className="blueBtn" type="submit">Register</button>
                </div>
            </div>
        );
    }
}

export default signup;