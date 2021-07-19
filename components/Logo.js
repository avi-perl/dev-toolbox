import React from 'react';

import styles from "../styles/Logo.module.css"

const Logo = () => {
    return (
        <div className="d-none d-sm-block">
            <div className={styles.Logo}>
                <a href={"/"}>
                    <span className={styles.LogoClass}>avi</span>
                    <span className={styles.LogoGrey}>.</span>
                    <span className={styles.LogoWords}>tools</span>
                    <span className={styles.LogoGrey}>()</span>
                </a>
            </div>
        </div>
    );
};

export default Logo;
