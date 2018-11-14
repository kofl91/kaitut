import React, {Component} from 'react';
import './../App.css';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

export class Question extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.keyPressed = this.keyPressed.bind(this);
    }

    componentWillMount(){
        this.setState({answer: ""});
    }

    handleSubmit(){
        this.props.handleAnswer(this.state.answer);
        this.setState({answer: ""});
    };

    onChange(e){
        this.setState({answer: e.target.value});
    };

    render(){
        return (<div>
            <p>{this.props.question}</p>
            <Input color="yellow" value={this.state.answer} onChange={this.onChange} onKeyDown={this.keyPressed}/>
            <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                submit
            </Button>
            {
                (this.props.goback) ?
                    <Button variant="contained" color="secondary" onClick={this.props.goback}>
                        back
                    </Button>
                    : null
            }
        </div>);
    }

    keyPressed(event) {
        var code = event.keyCode || event.which;
        console.log(code);
        if(code === 13 || code === 40) { //13 is the enter keycode
            this.handleSubmit();
        }
        else if(code === 38) { //13 is the enter keycode
            if(this.props.goback){
                this.props.goback();
            }
        }
    }
}