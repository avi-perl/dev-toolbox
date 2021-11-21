import React, {Component} from 'react';
import { withRouter } from "next/router"

import {DashboardLayout} from "../components/Layout";
import InputTextarea from "../components/InputTextarea"
import ResultText from "../components/ResultText";


class Hebrew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textOnly: '',
            words: '',
            noMaqaf: '',
            noNiqqud: '',
            noTaamim: '',
            gematria: '',
        }
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(value) {
        const url = '/api/hebrew?t=' + encodeURI(value)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({textOnly: data.text_only});
                this.setState({words: data.words.words.join("\n")});
                this.setState({noMaqaf: data.no_maqaf});
                this.setState({noNiqqud: data.no_niqqud});
                this.setState({noTaamim: data.no_taamim.no_taamim});
                this.setState({gematria: JSON.stringify(data.gematria)});
            })
    }

    render() {
        return (
            <DashboardLayout>
                <InputTextarea onTextChange={this.handleTextChange} placeholder={"Enter text to manipulate..."}/>
                <br/>
                <ResultText title={"Text Only"}>{this.state.textOnly}</ResultText>
                <ResultText title={"No Makaf"}>{this.state.noMaqaf}</ResultText>
                <ResultText title={"Words"}>{this.state.words}</ResultText>
                <ResultText title={"No Nikud"}>{this.state.noNiqqud}</ResultText>
                <ResultText title={"No Ta'amim"}>{this.state.noTaamim}</ResultText>
                <ResultText title={"Gematria"}>{this.state.gematria}</ResultText>
            </DashboardLayout>
        );
    }
}

export default withRouter(Hebrew);
