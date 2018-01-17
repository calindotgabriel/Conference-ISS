import React, { Component } from 'react';

import PeopleItem from './PeopleItem';
import SearchBar from './SearchBar';

import data from '../utils/data';

class PeopleList extends Component {
    constructor(props) {
        super(props);
        this.state = {data: data};
        this.dataChanged = this.dataChanged.bind(this);
    }
    dataChanged(e) {
        const criteria = e.target.value;
        if (criteria == '') {
            this.setState({data: data});
            return;
        }
        const newData = this.state.data.filter(p => p.first_name.includes(criteria)) 
        this.setState({data: newData})
    }
    render() {
        return (
            <div>
                <SearchBar onChange={this.dataChanged}/>
                {this.state.data.map((p) => <PeopleItem key={p.id} person={p}/>)}
            </div>
        );
    }
}
// 

export default PeopleList;