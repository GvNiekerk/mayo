import { Component } from "react";
import './App.css';
import Cookies from 'universal-cookie';



class adminRegister extends Component 
{

    constructor(props)
    {
       super(props);
       this.state = {email: '', password: '', password2: '', cellNo: '', address: ''};

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
            case 'cellNo':
                this.setState({ cellNo: event.target.value })
                break; 
            case 'address':
                this.setState({ address: event.target.value })
                break; 
        }
    }

    //Changed name to correct naming syntax
    RequestRegister(event){
        event.preventDefault();

        var req = {
            adminEmail: this.state.email,
            adminPassword: this.state.password,
            adminPassword2: this.state.password2,
            cellNum: this.state.cellNo,
            address: this.state.address
        }

        console.log(JSON.stringify(req));

        var headers = new Headers();
        headers.append('Content-Type', 'application/json')

        fetch("http://localhost:3000/admin/register", {
            method: "post",
            headers: headers,
            body: JSON.stringify(req),
        }).then((response) => {
            if (response.ok) {
                const cookies = new Cookies();
                cookies.set('token', response.headers.get('auth-token'), { path: "/register" })
                alert("Success");
            }
            else{
                alert("Invalid Login")
            }
        })
    }
    


    render()
    {
        return (
            <div className="App-header" >
              
                <div className="RegisterBox">
                    <h1>Register</h1>
                    <input onChange={this.handleChange} name="email" id="emailtxt" className="whiteInput" placeholder="Email" />
                    <input onChange={this.handleChange} name="cellNo" id="celltxt"  className="whiteInput" placeholder="Contact Number" />
                    <input onChange={this.handleChange} name="address" id="addresstxt" className="whiteInput" placeholder="Physical Address" />
                    <input onChange={this.handleChange} name="password" id="passtxt"  className="whiteInput" placeholder="Password" type="password" />
                    <input onChange={this.handleChange} name="password2" id="pass2txt"  className="whiteInput" placeholder="Confirm Password" type="password" />
                    <button onClick={this.RequestRegister} className="blueBtn" type="submit">Register Admin</button>
                 </div>



                 
            </div>
        );
    }
}
 export default adminRegister;