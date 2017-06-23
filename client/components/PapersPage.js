import React, { Component } from 'react';

export default class PapersPage extends Component {
    componentDidMount() {
        console.log('compDidMount')
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    Papers!!
                </div>
            </div>
        );
    }
}