import React from "react";
import TextTyper from "../Components/TextTyper";
import './RacerPage.scss'

export default class RacerPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentProgress: 0
        }
        this.hello = ""
    }

    setCurrentProgress(progress){
        this.setState({
            currentProgress: progress
        })
    }

    render(){
        return(
            <div>
                <TextTyper />
            </div>
        )
    }
}