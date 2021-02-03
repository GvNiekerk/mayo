import { Component } from "react";
import Card from './card';
import React, { useState } from 'react';



class home extends Component {

    constructor(props) {
        super(props);

        this.state = { startIndex: 0, cards: [],searchLocation : '',
        searchService: '' };
        this.handleChange = this.handleChange.bind(this);
        this.RequestSearch = this.RequestSearch.bind(this);
        this.getCards();
    }
    handleChange(event) {
        switch (event.target.name) {
            case 'searchService':
                this.setState({ searchService: event.target.value })
                 break; 
            case 'searchLocation':
                this.setState({ searchLocation: event.target.value })
                break;
        }
    }

    getCards = () => {
        console.log('calling to get shit')
        var cards = [];

        fetch(`http://localhost:3000/home/getlistings?start=${this.state.startIndex}`, {
            method: "GET",
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(`retrieved shit:`)
                console.log(responseJson)
                responseJson.forEach(card => {
                    cards.push(<Card image={card.image64} companyName={card.companyname} city={card.city} suburb={card.suburb} adres={card.adres} hourlyRate={card.hourlyRate} userEmail={card.userEmail} service={card.service} />)
                });
                this.setState({cards: cards})
            })
    }

    changePage = (isNext) => {
        const newNumber = isNext ? this.state.startIndex + 5 : this.state.startIndex - 5;
        this.setState({startIndex: newNumber});

        this.getCards();
    }

    RequestSearch = () => {
        console.log('calling to get search shit')
        var cards = [];
        var req = {
            service: this.state.searchService,
            city: this.state.searchLocation,
            suburb: this.state.searchLocation,
            adress: this.state.searchLocation
        }

        console.log(JSON.stringify(req));
        fetch(`http://localhost:3000/service/search?start=${this.state.startIndex}`, {
            method: "POST",
            body: JSON.stringify(req),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(`retrieved shit:`)
                console.log(responseJson)
                responseJson.forEach(card => {
                    cards.push(<Card image={card.image64} companyName={card.companyname} city={card.city} suburb={card.suburb} adres={card.adres} hourlyRate={card.hourlyRate} userEmail={card.userEmail} service={card.service} />)
                });
                this.setState({cards: cards})
            })
    }
    

    render() {

        return (
            <div className="App">


                <div>
                    <h2 className="heading">Get the best price for what you need done</h2>
                </div>

                <div className="App">
                    <select name="searchService" value={this.state.value} onChange={this.handleChange}>
                        <option value="Plumbing">Plumbing</option>
                        <option value="Electrical">Electrical</option>
                        <option value="Gardening">Gardening</option>
                        <option value="Construction">Construction</option>
                    </select>
                    <input type="text" className="searchLocation" placeholder="Location" />
                    <button onClick={this.RequestSearch} className="search-btn" type="button">Search</button>
                    <div>
                        {this.state.cards}
                    </div>
                    <button onClick={() => { this.changePage(false)}}>Previous</button>
                    <button onClick={() => { this.changePage(true)}}>Next</button>
                </div>


            </div>


        );
    }
}
export default home;