import React, {Component} from 'react';
import './../App.css';
import Button from '@material-ui/core/Button';

export class AnswerOverview extends Component{
    render(){
        return (<div>
            <p>You answered all questions. Congratulations</p>
            <Button variant="contained" color="secondary" onClick={this.props.goback}>back</Button>
        </div>);
    }
}