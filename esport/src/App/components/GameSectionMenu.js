import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GameSectionMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            gameId: this.props.gameId
        };
    }
    
    render() {
        const gameTitle = this.state.title;
        const gameId = this.state.gameId;
        return(
            <div>
                {/* menu buttons for redirection */}
                { 
                    gameId === "LoL" && 
                    <Link 
                        to={{
                            pathname: `/AllTeams/${gameId}`, 
                            state: {
                                title: gameTitle
                            }
                        }}>
                        <button>View All Teams</button>
                    </Link> 
                }
                
                { 
                    gameId === "OW" && 
                    <Link to={{
                        pathname: `/AllTeams/${gameId}`,
                        state: {
                            title: gameTitle
                        }
                    }}> 
                    <button>View All Teams</button> 
                    </Link> 
                }
                
                { 
                    gameId === "D2" && 
                    <Link to={{
                        pathname: `/AllTeams/${gameId}`,
                        state: {
                            title: gameTitle
                        }
                    }}> 
                    <button>View All Teams</button> 
                    </Link> 
                }
                <button>View All Players</button>
            </div>
        );
    }
}

export default GameSectionMenu;