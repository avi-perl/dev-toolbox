import React from 'react';

import styles from "../styles/InputTextarea.module.css"

import Badge from "../components/Badge"

class InputTextarea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: (this.props.children ? this.props.children : '')
        }
        this.handleKeypress = this.handleKeypress.bind(this);
    }

    handleKeypress(event) {
        this.setState({value: event.target.value});
        this.props.onTextChange(event.target.value);
    }

    charCount() {
        return this.state.value ? this.state.value.length : 0;
    }

    wordList() {
        return this.state.value ? this.state.value.trim().split(/[ \t]+/) : []
    }

    wordCount() {
        return this.wordList().length;
    }

    uniqueWordCount() {
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }

        return this.wordList().filter(onlyUnique).length;
    }

    lineCount() {
        return this.state.value ? this.state.value.split(/\r\n|\r|\n/).length : 0;
    }

    render() {
        return (
            <>
                <textarea
                    className={styles.inputBox}
                    readOnly={this.props.readOnly}
                    onChange={(event) => this.handleKeypress(event)}
                    value={this.props.children}
                    placeholder={this.props.placeholder}
                />
                {!this.props.noGutter ? (
                    <div className={styles.inputGutter}>
                        <Badge text={"Chars"} subtext={this.charCount()} color={"#4EC9B0FF"}/>
                        <Badge text={"Words"} subtext={this.wordCount()} color={"#b6a853"}/>
                        <Badge text={"Unique Words"} subtext={this.uniqueWordCount()} color={"#c9794e"}/>
                        <Badge text={"Lines"} subtext={this.lineCount()} color={"#8d3b70"}/>
                    </div>
                ) : ('')}
            </>
        );
    }
}

export default InputTextarea;