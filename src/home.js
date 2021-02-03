import { Component } from "react";
import Card from './card';
import React, { useState } from 'react';



class home extends Component {

    constructor(props) {
        super(props);

        this.state = { startIndex: 0, cards: [] };

        this.getCards();
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

    searchListing = () => {
        console.log('calling to get search shit')
        var cards = [];
        var req = {
            service: this.state.service,
            city: this.state.city,
            suburb: this.state.suburb,
            adress: this.state.adress
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
                    <input type="text" className="search-field" placeholder="Business, Services.." />
                    <input type="text" className="search-field" placeholder="Location" />
                    <button className="search-btn" type="button">Search</button>
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