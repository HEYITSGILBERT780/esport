import React, { Component } from 'react';
import GameSection from '../components/GameSection';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <h1>Esports Player Hub</h1>
                <div className="gamesList">
                    <GameSection title="League of Legends" />
                    <GameSection title="Overwatch" />
                    <GameSection title="Dota 2" />
                </div>
            </div>
        );
    }
}

export default Home;