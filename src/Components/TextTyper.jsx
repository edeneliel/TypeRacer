import React from "react";
import axios from "axios";
import {Paper, Subheader, TextField} from "material-ui";

const SEPARATOR = " ";

export default class MainPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            phrase: [""],
            currentWordIndex: 0,
            correctTillIndex: 0,
            inputValue: ""
        };

        this.setRandomPhrase()
    }

    equalsTill(firstString, secondString){
        for (let index = 0; index < secondString.length; index ++){
            if (secondString[index] !== firstString[index])
                return index;
        }
        return secondString.length
    }
    onTextChange(event, value){
        const currentWord = this.state.phrase[this.state.currentWordIndex];
        let equalsTill = this.equalsTill(value ,currentWord);
        let currentWordIndex = this.state.currentWordIndex;

        if (value[value.length-1] === SEPARATOR && value.replace(SEPARATOR, "") === currentWord){
            currentWordIndex++;
            value = "";
            equalsTill = 0
        }
        this.setState({
            correctTillIndex: equalsTill,
            inputValue: value,
            currentWordIndex
        })
    }
    getCurrentPhraseIndex() {
        let sum = 0;
        for (let index = 0; index < this.state.currentWordIndex; index++){
            sum += this.state.phrase[index].length + 1
        }
        return sum + this.state.inputValue.length
    }
    async setRandomPhrase(){
        const response = await axios.get("/getRandomPhrase");
        this.setState({
            phrase: response.data.split(SEPARATOR)
        })
    }

    render(){
        const currentWord = this.state.phrase[this.state.currentWordIndex];
        const currentPhraseIndex = this.getCurrentPhraseIndex();
        const phraseString = this.state.phrase.join(SEPARATOR);

        return(
            <div>
                <Paper>
                    <Subheader>
                        <a>{phraseString.slice(0, currentPhraseIndex - this.state.inputValue.length + this.state.correctTillIndex)}</a>
                        <a>{phraseString.slice(currentPhraseIndex - this.state.inputValue.length + this.state.correctTillIndex, currentPhraseIndex)}</a>
                        <a>{phraseString.slice(currentPhraseIndex, phraseString.length)}</a>
                    </Subheader>
                </Paper>
                <TextField value={this.state.inputValue} onChange={this.onTextChange.bind(this)}/>
            </div>
        )
    }
}