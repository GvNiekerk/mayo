import {cookies} from './Main';
import { Component } from "react";
import account from './account'; 

var currentEmail = "";
class ConfirmChanges extends Component {

  constructor(props) {
    super(props);

    this.state = {
     
      name: "N/A",
      location: "N/A",
      suburb: "N/A",
      city: "N/A",
      basicdesc: "N/A",
      detaildesc: "N/A",
      work: "N/A",
      website: "N/A",
      mail: "N/A",
      phone: "N/A",
      instaURL: "N/A",
      twitterURL: "N/A",
      facebookURL: "N/A",
      service: "",
      hourlyRate: ""
      
    }
    this.handleChange = this.handleChange.bind(this);
    this.ConfirmChanges = this.ConfirmChanges.bind(this);

    this.getData();
  }
  //Add tags en location in user schema NB NB NB NB NB NB NB NB NB NB 
  //Add vanaand getelement by ID kak 
  handleChange(event){
    switch (event.target.name) {
        case 'hourlyRate':
            this.setState({ hourlyRate: event.target.value })
            break;
        case 'name':
            this.setState({ name: event.target.value })
            break;
        case 'location':
            this.setState({ location: event.target.value })
            break;
        case 'service':
            this.setState({ work: event.target.value })
            break;  
        case 'website':
            this.setState({ website: event.target.value })
            break; 
        case 'mail':
            this.setState({ mail: event.target.value })
            break; 
        case 'phone':
            this.setState({ phone: event.target.value })
            break; 
        case 'basicdesc':
            this.setState({ basicdesc: event.target.value })
            break;
        case 'detaildesc':
            this.setState({ detaildesc: event.target.value})
            break;
        case 'insta':
            this.setState({ insta: event.target.value})
            break;
        case 'facebook': 
            this.setState({ facebook: event.target.value})
            break;
        case 'twitter':
            this.setState({ twitter: event.target.value})
            break;
        case 'suburb':
              this.setState({ suburb: event.target.value})
              break;
        case 'city':
              this.setState({ city: event.target.value})
              break;  
    }
}

  


getData = () => {

  var headers = new Headers();
  headers.append('Content-Type', 'application/json')
  headers.append('auth-token', cookies.get('token'))

  fetch("http://localhost:3000/user/getData", {
    method: "GET",
    headers: headers
  }).then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    this.setState(responseJson);
    //currentEmail = this.state.contactInformation.mail;
    //console.log(currentEmail);
  })
}

  
  


  ConfirmChanges(event){
    event.preventDefault();
    var headers = new Headers();
        headers.append('Content-Type', 'application/json')
    
    var req = {
        userEmail: this.state.mail,
        companyName: this.state.name,
        basicDesc: this.state.basicdesc,
        detailDesc: this.state.detaildesc,
        cellNum: this.state.phone,
        website: this.state.website,
        hourlyRate: this.state.hourlyRate,
        instaURL: this.state.insta,
        twitterURL: this.state.twitter,
        facebookURL: this.state.facebook,
        image64: this.state.image64,
        imageName: this.state.imageName,
        adress: this.state.location,
        suburb: this.state.suburb,
        city: this.state.city
    }
    
        fetch("http://localhost:3000/listing/update", {
            method: "post",
            headers: headers,
            body: JSON.stringify(req),
        }).then((response)=>{
            console.log(response.body);
            if (response.ok){
              alert("User updated successfully")
              window.location = ("/account");
            }
            else{alert("Error updating user") }
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
      <div>
        <h1 className="profilehead">Edit Your Profile</h1>

        <link rel="stylesheet" type="text/CSS" href="style.css" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,400,300,600,700,800" rel="stylesheet" type="text/css" />
        <div className="portfoliocard">
          <div className="coverphoto" />
          <div className="profile_picture" />
          <div className="left_col">
            <div className="followers">
              <div className="follow_count">{this.state.totalClicks}</div>
          total clicks
        </div>
            <div className="following">
              <div className="follow_count">{this.state.monthlyClicks}</div>
          monthly clicks
          <br/>
          <br/>
          
          Active Account:
          <br/>
          <br/>

        </div>
          </div>
          <div className="right_col">
           
            <input onChange={this.handleChange} name="hourlyRate" id="hourlyRate" className="follow_count" placeholder="Hourly Rate" />
            <br/>
            <input onChange={this.handleChange} name="name" id="name" className="name" placeholder="Company Name"/>
            <br/>
            <input onChange={this.handleChange} name="location" id="location" className="location" placeholder="Business Address" />
            <input onChange={this.handleChange} name="suburb" id="suburb" className="suburb" placeholder="Suburb" />
            <input onChange={this.handleChange} name="city" id="city" className="city" placeholder="City" />
            <br/>
            <select name="service" value={this.state.value} onChange={this.handleChange}>
                        <option value="Plumbing">Plumbing</option>
                        <option value="Electrical">Electrical</option>
                        <option value="Gardening">Gardening</option>
                        <option value="Construction">Construction</option>
                    </select>            <br/>
            <input onChange={this.handleChange} name="website" id="website" className="website" placeholder="Website URL" />
            <br/>
            <input onChange={this.handleChange} name="mail" id="mail" className="mail" placeholder="Email Address" />
            <br/>
            <input onChange={this.handleChange} name="phone" id="phone" className="phone" placeholder="Business Phone Number" />
            <br/>
            <input onChange={this.handleChange} name="basicdesc" id="basicdesc" className="basic_desc" placeholder="Basic description of service" />
            <br/>
            <input onChange={this.handleChange} name="detaildesc" id="detaildesc" className="detailed_desc" placeholder="Detailed description of service/services offered and prices" />
            <br/>
            <input onChange={this.handleChange} name="insta" id="insta" className="insta" placeholder="Company Instagram URL" />
            <br/>
            <input onChange={this.handleChange} name="facebook" id="facebook" className="facebook" placeholder="Company Facebook URL" />
            <br/>
            <input onChange={this.handleChange} name="twitter" id="twitter" className="twitter" placeholder="Company Twitter URL" />
            <br/>
            <input onChange={this.handleUpload} type="file" className="fileup" name="file" />
                    <img id="test-image" style={{width: 200, height: 200 }} />
            <br/>
            


            <button onClick={this.ConfirmChanges} className="button">Save changes</button>

          </div>
        </div>
      </div>
    );
  }
}
export default ConfirmChanges;