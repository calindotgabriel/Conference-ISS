import React, { Component } from 'react';

class PeopleItem extends Component {
    render() {
        const { person } = this.props;
        return (
            <p> {person.first_name} / {person.email} </p>
        );
    }
}

export default PeopleItem;
