import { Component } from "react";
import './App.css';




class detailedlisting extends Component 
{

    constructor(props)
     {
        super(props);
     }

    render()
    {

        return (
        <div className="cards">
            <h3>Tel Number : 0854589784</h3>
            <h3>Email: waynesworld@gmail.com</h3>
            <button className="backknoppie">X</button>
		</div>
        );
    }
}
 export default detailedlisting;