import { Component } from "react";
import Card from './card';
import React, { useState } from 'react';



class home extends Component {
    
    constructor(props) {
        window.alert("COOKIES - By using this website, you automatically accept that we use cookies.");

        super(props);
        this.state = {
            startIndex: 0, 
            cards: [], 
            service: '',
            location: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.RequestSearch = this.RequestSearch.bind(this);
        this.getCards();
    }

    handleChange = (event) => {
        switch (event.target.name) {
            case 'searchService':
                this.setState({ service: event.target.value })
                break;
            case 'searchLocation':
                this.setState({ location: event.target.value })
                break;
        }
    }

    getCards = () => {
        fetch(`http://mayocompare.co.za/home/getlistings?start=${this.state.startIndex}&service=${this.state.service}&location=${this.state.location}`, {
            method: "GET",
        }).then((response) => response.json())
            .then((responseJson) => {
                var cards = [];
        
                responseJson.forEach(card => {
                    cards.push(<Card image={card.image64} companyName={card.companyName} city={card.city} suburb={card.suburb} adress={card.adress} hourlyRate={card.hourlyRate} userEmail={card.userEmail} service={card.service} />)
                });
                this.setState({ cards: cards })
            })
    }

    changePage = (isNext) => {
        const newNumber = isNext ? this.state.startIndex + 5 : this.state.startIndex - 5;
        this.setState({ startIndex: newNumber });

        this.getCards();
    }

    updateCards = (cards) => {
    }

    RequestSearch = () => {

        var req = {
            service: this.state.searchService,
            city: this.state.searchLocation,
            suburb: this.state.searchLocation,
            adress: this.state.searchLocation
        }
        console.log(req);

        console.log(JSON.stringify(req));
        fetch(`http://mayocompare.co.za/home/getlistings?start=${this.state.startIndex}&service=${this.state.service}&location=${this.state.location}`, {
            method: "GET",

        }).then((response) => response.json())
            .then((responseJson) => {
                var cards = [];
        
                responseJson.forEach(card => {
                    cards.push(<Card image={card.image64} companyName={card.companyname} city={card.city} suburb={card.suburb} adress={card.adress} hourlyRate={card.hourlyRate} userEmail={card.userEmail} service={card.service} />)
                });
                this.setState({ cards: cards })
            })
    }


    render() {

        return (
            <div className="App">

               
               
                    <select className="dropbox" name="searchService" value={this.state.value} onChange={this.handleChange}>
                        <option >-Select Service-</option>
                        <option value="Plumbing">Plumbing</option>
                        <option value="Electrical">Electrical</option>
                        <option value="Gardening">Gardening</option>
                        <option value="Construction">Construction</option>
                        <option value="Hair Dresser">Hair Dresser</option>
                        <option value="Nail Technician">Nail Technician</option>
                        <option value="Solar Services">Solar services</option>
                        <option value="Landscaping">Landscaping</option>
                        <option value="Mechanic">Mechanic</option>
                        <option value="Cleaning Services">Cleaning Services</option>
                        <option value="Pet Grooming">Pet Grooming</option>
                        <option value="Pet Services">Pet services</option>
                        <option value="Repairman">Repairman</option>
                        <option value="Internet Services">Internet services</option>
                    </select>
                    <input type="text" name="searchLocation" onChange={this.handleChange} className="whiteInput" placeholder="Location" />
                    <button onClick={this.RequestSearch} className="search-btn" type="button">Search</button>
                    <div className="cards-container">
                        {this.state.cards}
                    </div>
                    <button className="page-button" onClick={() => { this.changePage(false) }}>Previous</button>
                    <button className="page-button" onClick={() => { this.changePage(true) }}>Next</button>
               


            </div>


        );
    }
}
export default home;