import React, {Component} from 'react';
import './App.css';
import {Question} from "./intro/Question";
import {AnswerOverview} from "./intro/AnswerOverview";

const questions = [
    "What is your name?",
    "Where do you live?",
    "What is your occupation?",
    "What is you favorite colour?"
];

const SelectQuestion = (props) => {
    if (props.questionId === 0) {
        return (<Question handleAnswer={props.handleAnswer} question={questions[props.questionId]} />);
    } else if (props.questionId < questions.length) {
        return (<Question handleAnswer={props.handleAnswer} question={questions[props.questionId]} goback={props.goBack} />);
    } else {
        return (<AnswerOverview goback={props.goBack} />);
    }
};

class App extends Component {
    constructor() {
        super();
        this.answerQuestion = this.answerQuestion.bind(this);   // so we have the this context inside the function
        this.goBack = this.goBack.bind(this);
    }

    componentWillMount() {
        this.setState({questionId: 0, answers:[]});
    }

    render() {
        return <div className="App">
            {this.state.answers.map((answer,index) =>{
                return (
                    <p key={index}>{questions[index]}  {answer}</p>
                );
            })}
            <SelectQuestion handleAnswer={this.answerQuestion} goBack={this.goBack} questionId={this.state.questionId}/>
        </div>;
    }

    answerQuestion(answer) {
        let answers = this.state.answers;
        answers.push(answer);
        const current = this.state.questionId;
        this.setState({questionId: current + 1, answers: answers});
    }

    goBack() {
        const current = this.state.questionId;
        let answers = this.state.answers;
        answers.pop();
        this.setState({questionId: current -1, answers: answers});
    }
}

export default App;
