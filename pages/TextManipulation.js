import React, {Component} from 'react';
import { withRouter } from "next/router"

import {DashboardLayout} from "../components/Layout";
import InputTextarea from "../components/InputTextarea"
import ResultText from "../components/ResultText";


class TextManipulation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(value) {
        this.setState({
            text: value
        });
    }

    reverseText(text) {
        let reversed_text = text
        reversed_text = reversed_text
                .split("\n")
                .map((txt) => {
                    return txt.split("").reverse().join("")
                })
                .join("\n")
        return reversed_text
    }

    render() {
        return (
            <DashboardLayout>
                <InputTextarea onTextChange={this.handleTextChange} placeholder={"Enter text to manipulate..."}/>
                <br/>
                <ResultText title={"Upper Case"}>{this.state.text.toUpperCase()}</ResultText>
                <ResultText title={"Lower Case"}>{this.state.text.toLowerCase()}</ResultText>
                <ResultText title={"Reverse Case"}>{this.reverseText(this.state.text)}</ResultText>
            </DashboardLayout>
        );
    }
}

export default withRouter(TextManipulation);
