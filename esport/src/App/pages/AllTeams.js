import React, { Component } from 'react';

class AllTeams extends Component {
    render() {
        return (
            <h1>{this.props.location.state.title} Teams</h1>    
        );
    }
}

export default AllTeams;