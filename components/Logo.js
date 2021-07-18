import React from 'react';

import styles from "../styles/Logo.module.css"

const Logo = () => {
    return (
        <div className="d-none d-sm-block">
            <div className={styles.Logo}>
                <span className={styles.LogoGrey}>&lt;</span>
                <span className={styles.LogoWords}>tools</span>{" "}
                <span className={styles.LogoGrey}>/&gt;</span>
            </div>
        </div>
    );
};

export default Logo;
