import React from "react";

import {NavSidebar} from "./NavSidebar";
import BodyWrapper from "./BodyWrapper";

export const DashboardLayout = ({children}) => {
    return (
        <BodyWrapper>
            <div className={"row m-0"}>
                <div className={"col-auto p-0"}><NavSidebar/></div>

                <div className={"col pr-0 pl-0"}>
                    <div className={"page-content"}>{children}</div>
                </div>
            </div>
        </BodyWrapper>
    );
};
