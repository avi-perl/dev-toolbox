import React from 'react';

import styles from "../styles/CopyButton.module.css"
import {FiCopy} from "react-icons/fi";

class CopyButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "copy",
        }
    }

    render() {

        return (
            <>
                <div
                    className={styles.copyButton + " float-right align-middle"}
                    onClick={() => {
                        navigator.clipboard.writeText(this.props.text);
                    }}
                >
                    <FiCopy /> {this.state.text}
                </div>
            </>
        );
    }
}

export default CopyButton;