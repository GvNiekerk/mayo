import {cookies} from './Main';
import { Component } from "react";

class ConfirmChanges extends Component {

  constructor(props) {
    super(props);

    this.state = {
      totalClicks: 0,
      monthlyClicks: 0,
      name: "N/A",
      location: "N/A",
      active: "N/A",
      contactInformation: {
        work: "N/A",
        website: "N/A",
        mail: "N/A",
        phone: "N/A",
        instaURL: "N/A",
        twitterURL: "N/A",
        facebookURL: "N/A"

      }
    }

    this.getData();
  }
  //Add tags en location in user schema NB NB NB NB NB NB NB NB NB NB 
  //Add vanaand getelement by ID kak 

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
    })
  }
  /*
  ConfirmChanges(event){
    event.preventDefault();
    var headers = new Headers();
        headers.append('Content-Type', 'application/json')
    
    var req = {
        userEmail: mail,
        companyName: name,

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
  */

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
          <div className="follow_count">{this.state.active.toString()}</div>
          Active Account:
          <br/>
          <br/>

        </div>
          </div>
          <div className="right_col">
           
            <input onChange={this.handleChange} name="hourlyRate" id="hourlyRate" className="follow_count" placeholder={this.state.hourlyRate} />
            <br/>
            <input onChange={this.handleChange} name="name" id="name" className="name" placeholder={this.state.name}/>
            <br/>
            <input onChange={this.handleChange} name="location" id="location" className="location" placeholder={this.state.location} />
            <br/>
            <input onChange={this.handleChange} name="work" id="work" className="work" placeholder={this.state.contactInformation.work} />
            <br/>
            <input onChange={this.handleChange} name="website" id="website" className="website" placeholder={this.state.contactInformation.website} />
            <br/>
            <input onChange={this.handleChange} name="mail" id="mail" className="mail" placeholder={this.state.contactInformation.mail} />
            <br/>
            <input onChange={this.handleChange} name="phone" id="phone" className="phone" placeholder={this.state.contactInformation.phone} />
            <br/>
            <input onChange={this.handleChange} name="basicdesc" id="basicdesc" className="basic_desc" placeholder={this.state.basicDesc} />
            <br/>
            <input onChange={this.handleChange} name="detaildesc" id="detaildesc" className="detailed_desc" placeholder={this.state.detailDesc} />
            <br/>
            <input onChange={this.handleChange} name="insta" id="insta" className="insta" placeholder={this.state.contactInformation.instaURL} />
            <br/>
            <input onChange={this.handleChange} name="facebook" id="facebook" className="facebook" placeholder={this.state.contactInformation.facebookURL} />
            <br/>
            <input onChange={this.handleChange} name="twitter" id="twitter" className="twitter" placeholder={this.state.contactInformation.twitterURL} />
            <br/>
            


            <button onClick={this.ConfirmChanges} className="button">Save changes</button>

          </div>
        </div>
      </div>
    );
  }
}
export default ConfirmChanges;