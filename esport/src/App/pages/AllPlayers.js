import React, { Component } from 'react';

class AllPlayers extends Component {
    render() {
        return(
            <div>
                <h1>All {this.props.location.state.title} Players</h1>
            </div>    
        );
    }
}

export default AllPlayers;