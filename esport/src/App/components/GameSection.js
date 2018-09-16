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
    
    // display function to show menu items when game's div is clicked
    toggleDisplay() {
        this.setState({
            display: !this.state.display
        });
    }
    
    render() {
        const title = this.props.title;
        const gameId = this.props.gameId;
        return (
            <div onClick={this.toggleDisplay}  className="gameSection">
                {/* game's title */}
                <h2>{ title }</h2>
                
                {/* show menu items if dislay is true */}
                { this.state.display === true && <GameSectionMenu title={ title } gameId={ gameId }/> }
            </div>
        );
    }
}

export default GameSection;