import { Component } from "react";
import Card from './card';
import React, { useState } from 'react';



class home extends Component {

    constructor(props) {
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
        fetch(`http://localhost:3000/home/getlistings?start=${this.state.startIndex}&service=${this.state.service}&location=${this.state.location}`, {
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
        fetch(`http://localhost:3000/home/getlistings?start=${this.state.startIndex}&service=${this.state.service}&location=${this.state.location}`, {
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