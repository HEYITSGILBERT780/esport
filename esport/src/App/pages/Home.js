import React, { Component } from 'react';
import GameSection from '../components/GameSection';

class Home extends Component {
    render() {
        return (
            <div className="flex-container">
                {/* Home page title section */}
                <div className="homeTitle">
                    <h1>Esports Player Hub</h1>
                    <p>Providing player info for various esports titles</p>
                </div>
                
                {/* Section menu for each game */}
                <div className="gamesList">
                    <h2>Games List</h2>
                    <GameSection title="League of Legends" gameId="LoL"/>
                    <GameSection title="Overwatch" gameId="OW"/>
                    <GameSection title="Dota 2" gameId="D2"/>
                </div>
            </div>
        );
    }
}

export default Home;