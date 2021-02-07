import {cookies} from './Main';
import { Component } from "react";

class detailedlisting extends Component {

  constructor(props) {
    super(props);
    

    this.state = {
      totalClicks: 0,
      monthlyClicks: 0,
      name: "N/A",
      location: "N/A",
      suburb: 'N/A',
      city: 'N/A',
      active: "N/A",
      profileImage: '',
      service:'',
      contactInformation: {
        work: "N/A",
        website: "N/A",
        mail: "",
        phone: "N/A",
        instaURL: "N/A",
        twitterURL: "N/A",
        facebookURL: "N/A"
      }
    }
    this.RequestClose = this.RequestClose.bind(this);
    this.getData();
  }

  getData = () => {
    //var headers = new Headers();
   // headers.append('Content-Type', 'application/json')
    //headers.append('auth-token', cookies.get('token'))

    fetch(`http://localhost:3000/profile/getUser?userEmail=${this.props.userMail}`, {
      method: "GET",
    }).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState(responseJson);
    })
  }

  RequestClose = () =>{
    this.setState({ showModal: false });
  }


  render() {
    return (
      <div>

        <link rel="stylesheet" type="text/CSS" href="style.css" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,400,300,600,700,800" rel="stylesheet" type="text/css" />
        <div className="portfoliocard">
          <div className="coverphoto" />
          <img src={this.state.profileImage} className="profile_picture" />
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
          <div className="follow_count">{this.state.hourlyRate}</div>
          Your Rate:

        </div>
          </div>
          <div className="right_col">
            <h2 className="name">{this.state.name}</h2>
            <h3 className="location">{this.state.location}</h3>
            <h3 className="location">{this.state.city}, {this.state.suburb}</h3>
            <ul className="contact_information">
              <li className="service">{this.state.service}</li>
              <li className="website"><a className="nostyle" href={this.state.contactInformation.website} >{this.state.contactInformation.website}</a></li>
              <li className="mail">{this.state.contactInformation.mail}</li>
              <li className="phone">{this.state.contactInformation.phone}</li>
              <li className="basic_desc">{this.state.basicDesc}</li>
              <li className="detailed_desc">{this.state.detailDesc}</li>
              <li className="insta">{this.state.contactInformation.instaURL}</li>
              <li className="facebook">{this.state.contactInformation.facebookURL}</li>
              <li className="twitter">{this.state.contactInformation.twitterURL}</li>
              <li className="rate">{this.state.hourlyRate}</li>
              <button onClick={this.props.onClose} className="btnClose">Close</button>

              {/* <li className="resume"><a href="#" className="nostyle"></a></li> */}
            </ul>

          </div>
        </div>
      </div>
    );
  }
}
export default detailedlisting;