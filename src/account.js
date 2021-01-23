import { Component } from "react";

class account extends Component 
{

    constructor(props)
     {
        super(props);
     }

    render()
    {
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
          <div className="follow_count">18,541</div>
          total clicks
        </div>
        <div className="following">
          <div className="follow_count">181</div>
          monthly clicks
        </div>
      </div>
      <div className="right_col">
        <h2 className="name">Waynes Plumbing</h2>
        <h3 className="location">Centurion, Gauteng</h3>
        <ul className="contact_information">
          <li className="work">Plumbing</li>
          <li className="website"><a className="nostyle" href="#">www.wayne.com</a></li>
          <li className="mail">wayne@wayne.com</li>
          <li className="phone">071 545 7845</li>
          <li className="resume"><a href="#" className="nostyle"></a></li>
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