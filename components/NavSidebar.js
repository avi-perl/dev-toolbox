/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import {Navigation} from "react-minimal-side-navigation";
// import {useHistory, useLocation} from "react-router-dom";
import {useRouter} from "next/router";
// import Icon from "awesome-react-icons";
import React, {useState} from "react";
import { VscCode, VscInfo, VscWatch, VscTextSize } from "react-icons/vsc";

import styles from "../styles/NavSidebar.module.css"

import Logo from "../components/Logo"
import AviLink from "./AviLink";


export const NavSidebar = () => {
    const router = useRouter();
    // const location = useLocation();
    // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className={"navigation"}>
            <div className={"navigation-title"}>
                <Logo/>
            </div>
            <hr className={styles.greyHr}/>
            <Navigation
                // you can use your own router's api to get pathname
                activeItemId="/"
                onSelect={({itemId}) => {
                    // maybe push to the route
                    if (itemId) {
                        router.push(itemId)
                    }
                }}
                items={[
                    {
                        title: 'About',
                        itemId: '/',
                        // you can use your own custom Icon component as well
                        // icon is optional
                        elemBefore: () => <VscInfo />,
                    },
                    {
                        title: 'Text Manipulation',
                        itemId: '/TextManipulation',
                        // you can use your own custom Icon component as well
                        // icon is optional
                        elemBefore: () => <VscTextSize />,
                    },
                    {
                        title: 'Parser',
                        itemId: null,
                        elemBefore: () => <VscCode />,
                        subNav: [
                            {
                                title: 'coming soon...',
                                elemBefore: () => <VscWatch />,
                            },
                        ],
                    },
                ]}
            />
            <AviLink />
        </div>
    );
};
