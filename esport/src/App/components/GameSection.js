import React, { Component } from 'react';
import GameSectionMenu from './GameSectionMenu';

class GameSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        };
        
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    
    toggleDisplay() {
        this.setState({
            display: !this.state.display
        });
    }
    
    render() {
        return (
            <div onClick={this.toggleDisplay}>
                <h1>{this.props.title}</h1>
                { this.state.display === true && <GameSectionMenu /> }
            </div>
        );
    }
}

export default GameSection;