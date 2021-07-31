import React, {useState} from 'react';
import st from './app.module.css';
import AppHeader from "../header";
import AppFooter from "../footer";
import AppBody from "../body";
import {radioList} from "../../data_store/data";

const App = () => {
    const [selected, onSelect] = useState('');
    return (
        <div className={st.app}>
            <AppHeader onPower={onSelect} />
            <AppBody {...{list: radioList, onSelect, selected}} />
            <AppFooter name={selected} />
        </div>
    )
}

export default App;
