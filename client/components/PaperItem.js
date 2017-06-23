import React, { Component } from 'react';
import TextFieldGroup from './common/TextFieldGroup';
// import Paper from '../../models/Paper';

export default class PaperItem extends Component {
    componentDidMount() {
        this.state = {}
    }
    onChange(e) {
        this.setState({ grade: e.target.value });
        // console.log(this.state.grade);                
    }
    onClick() {
        const { grade } = this.state;
        // console.log('onClick w ' + grade)
        this.props.onGraded(grade);
    }
    render() {
        const { grade } = this.state ? this.state : '';

        const { p } = this.props;
        const input =
            <TextFieldGroup
                field="grade"
                label="Enter grade"
                value={grade}
                onChange={this.onChange.bind(this)}
            /> 
        const go = <div onClick={this.onClick.bind(this)} className="form-group"><button className="btn btn-primary btn-xs">Ok</button></div>

        if (p.diff > 1)
            return (
                <div>
                    <p> {p.id} {p.firstGrader}, {p.secondGrader}, note: {p.firstGrade}, {p.secondGrade}, diff: {p.diff} <span className='red'> RECORECTARE </span> 
                    {input} {go}</p>
                </div>
            );
        else 
            return ( 
                <div>
                    <p> {p.id} {p.firstGrader}, {p.secondGrader}, note: {p.firstGrade}, {p.secondGrade}, diff: {p.diff} <span className='green'> OK </span> </p>
                    {input} 
                </div>);
    }
}