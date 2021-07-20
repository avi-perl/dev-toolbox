import React from 'react';

import styles from "../styles/Badge.module.css"

class Badge extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className={styles.badge}>
                    <span className={[styles.left].join(' ')}>
                        {this.props.text}
                    </span>
                    <span className={styles.right}  style={{backgroundColor: this.props.color}}>
                        {this.props.subtext}
                    </span>
                </div>
            </>
        );
    }
}

export default Badge;