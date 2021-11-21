import React from 'react';
import InputTextarea from "./InputTextarea";
import CopyButton from "./CopyButton";

class ResultText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: (this.props.children ? this.props.children : '')
        }
    }

    render() {
        return (
            <>
                <div className={"row"}>
                    <div className={"col-6"}><h3>{this.props.title}</h3></div>
                    <div className={"col-6 align-self-end pb-1"}>
                        <CopyButton text={this.props.children} />
                    </div>
                </div>

                <InputTextarea readOnly={true} noGutter={true}>{this.props.children}</InputTextarea>

            </>
        );
    }
}

export default ResultText;