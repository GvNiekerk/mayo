import {cookies} from './Main';
import { Component } from "react";

class account extends Component {

  constructor(props) {
    super(props);

    this.state = {
      totalClicks: 0,
      monthlyClicks: 0,
      name: "N/A",
      location: "N/A",
      contactInformation: {
        work: "N/A",
        website: "N/A",
        mail: "N/A",
        phone: "N/A"
      }
    }

    this.getData();
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
      this.setState(responseJson);
    })
  }

  render() {
    return (
      <div>
        <h1 className="profilehead">Your Profile</h1>

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
        </div>
          </div>
          <div className="right_col">
            <h2 className="name">{this.state.name}</h2>
            <h3 className="location">{this.state.location}</h3>
            <ul className="contact_information">
              <li className="work">{this.state.contactInformation.work}</li>
              <li className="website"><a className="nostyle" href={this.state.contactInformation.website} >{this.state.contactInformation.website}</a></li>
              <li className="mail">{this.state.contactInformation.mail}</li>
              <li className="phone">{this.state.contactInformation.phone}</li>
              {/* <li className="resume"><a href="#" className="nostyle"></a></li> */}
            </ul>
            <button className="button">edit profile</button>
            <button className="button">terminate service</button>

          </div>
        </div>
      </div>
    );
  }
}
export default account;