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
                    <div>
                        <Link 
                            to={{
                                pathname: `/AllTeams/${gameId}`, 
                                state: {
                                    title: gameTitle
                                }
                            }}>
                            <button>View All Teams</button>
                        </Link>
                        <Link 
                            to={{
                                pathname: `/AllPlayers/${gameId}`, 
                                state: {
                                    title: gameTitle
                                }
                            }}>
                            <button>View All Players</button>
                        </Link>
                    </div>
                }
                
                { 
                    gameId === "OW" && 
                    <div>
                        <Link to={{
                            pathname: `/AllTeams/${gameId}`,
                            state: {
                                title: gameTitle
                            }
                        }}> 
                        <button>View All Teams</button> 
                        </Link>
                        <Link 
                            to={{
                                pathname: `/AllPlayers/${gameId}`, 
                                state: {
                                    title: gameTitle
                                }
                            }}>
                            <button>View All Players</button>
                        </Link>
                    </div>
                }
                
                { 
                    gameId === "D2" && 
                    <div>
                        <Link to={{
                            pathname: `/AllTeams/${gameId}`,
                            state: {
                                title: gameTitle
                            }
                        }}> 
                        <button>View All Teams</button> 
                        </Link>
                        <Link 
                            to={{
                                pathname: `/AllPlayers/${gameId}`, 
                                state: {
                                    title: gameTitle
                                }
                            }}>
                            <button>View All Players</button>
                        </Link>
                    </div>
                }
            </div>
        );
    }
}

export default GameSectionMenu;