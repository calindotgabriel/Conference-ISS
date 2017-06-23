import React, { Component } from 'react';

import axios from 'axios';
import jwtDecode from 'jwt-decode';

import PaperItem from './PaperItem';

export default class PapersPage extends Component {
    componentDidMount() {
        const token = localStorage.getItem('jwtToken');
        console.log('token:' + token);
        const { username } = jwtDecode(token);
        this.setState({username: username});
        this.fetchPapers = this.fetchPapers.bind(this);
        this.fetchPapers(username);
    }
    fetchPapers(username) {
        axios.post(`/api/papers/${username}`, {})
            .then(res => {
                const papers = res.data;
                this.setState({papers: papers})
            });
    }
    onGraded(grade) {
        console.log('onGraded: ' + grade);
        // debugger;
        console.log('username: ' + this.state.username);
        const username = this.state.username;
        axios.post(`/api/papers/grade`, {grade: grade, username: username })
            .then(res => {
                const status = res.data.status;
                console.log(status);
                // this.fetchPapers();
            });
    }
    render() {
        const apiPapers = this.state ? this.state.papers : [];
        let papers = 
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    { apiPapers.map(p => 
                        <PaperItem onGraded={this.onGraded.bind(this)}key={p._id} p={p}/>
                        )} 
                </div>
            </div>
        return <div> {papers} </div>;
    }
}