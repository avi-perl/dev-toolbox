import React from 'react';

import {DashboardLayout} from "../components/Layout";
import InputTextarea from "../components/InputTextarea"

export const Context = React.createContext();

export default function TextManipulation() {
    let state = {
        text: ''
    }
    function handleTextChange(value) {
        state.text = value;
    }

    return (
        <DashboardLayout>
            <InputTextarea onTextChange={handleTextChange}/>
            <br/>
            More to come...
            {/*<h3>All Caps</h3>*/}
            {/*<InputTextarea readOnly={true} noGutter={true}/>*/}
            {/*<h3>Reverse Case</h3>*/}
            {/*<InputTextarea readOnly={true} noGutter={true}/>*/}
        </DashboardLayout>
    );
}
