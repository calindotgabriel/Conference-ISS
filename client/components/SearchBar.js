import React, { Component } from 'react';

class SearchBar extends Component {
    
    render() {
        return (
            <input type="text" onChange={this.props.onChange}/>      
        );
    }
}

export default SearchBar;