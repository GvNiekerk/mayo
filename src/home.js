import { Component } from "react";
import Card from './card';
import React, {useState} from 'react';



class home extends Component 
{

    constructor(props)
     {
        super(props);
     }

    render()
    {

        return (
        <div className="App">
            
            
                 <div>
                 <h2 className="heading">Get the best price for what you need done</h2>
                 </div>

                 <div className="App">
                    <input type="text" className="search-field" placeholder="Business, Services.."/>
                    <input type="text" className="search-field" placeholder="Location"/>
                    <button className="search-btn" type="button">Search</button>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                    
                 </div>
                 
                 
		</div>

            
        );
    }
}
 export default home;