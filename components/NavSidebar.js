/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import {Navigation} from "react-minimal-side-navigation";
// import {useHistory, useLocation} from "react-router-dom";
import {useRouter} from "next/router";
// import Icon from "awesome-react-icons";
import React, {useState} from "react";


export const NavSidebar = () => {
    // const router = useRouter();
    // const location = useLocation();
    // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className={"navigation"}>
            <Navigation
                // you can use your own router's api to get pathname
                activeItemId="/"
                onSelect={({itemId}) => {
                    // maybe push to the route
                    console.log(itemId);
                }}
                items={[
                    {
                        title: 'Dev Tools',
                        itemId: '/',
                        // you can use your own custom Icon component as well
                        // icon is optional
                        // elemBefore: () => <Icon name="inbox"/>,
                    },
                    {
                        title: 'Management',
                        itemId: '/management',
                        // elemBefore: () => <Icon name="users"/>,
                        subNav: [
                            {
                                title: 'Projects',
                                itemId: '/management/projects',
                            },
                            {
                                title: 'Members',
                                itemId: '/management/members',
                            },
                        ],
                    },
                    {
                        title: 'Another Item',
                        itemId: '/another',
                        subNav: [
                            {
                                title: 'Teams',
                                itemId: '/management/teams',
                            },
                        ],
                    },
                ]}
            />
        </div>
    );
};
