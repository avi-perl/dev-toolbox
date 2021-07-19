import React from 'react';

import styles from "../styles/AviLink.module.css"
import {VscGithub} from "react-icons/vsc";

const AviLink = () => {
    return (
        <>
            <div className={styles.bottomdiv + " d-none d-sm-block text-center"}>
                {/*<hr className={styles.LogoGrey}} />*/}
                <div className={styles.Logo}>
                    <a href={"https://aviperl.me/"} target={"none"}>
                        <span className={styles.LogoGrey}>&lt;</span>
                        <span className={styles.LogoWords}>avi</span>{" "}
                        <span className={styles.LogoGrey}>/&gt;</span>
                    </a>
                </div>

                <span className={styles.LogoGrey}><small><a href={"https://aviperl.me/"}
                                                            target={"none"}>Created by Avi</a></small></span>
                <span className={styles.LogoGrey}>&#32;&#32;//&#32;&#32;</span>
                <span className={styles.LogoGrey}>
                <a href={"https://github.com/avi-perl/dev-toolbox"} target={"none"}>
                    <VscGithub/>
                </a>
            </span>
            </div>
        </>
    );
};

export default AviLink;
