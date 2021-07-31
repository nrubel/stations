import React from "react";
import st from './footer.module.css';
import {FProps} from "../../data_store/interfaces";

const AppFooter = (props: FProps) => {
    return (
        <footer className={st.appFooter}>
            {
                !!props.name &&
                <>
                  <small className={st.currentlyPlaying}>Currently Playing</small>
                  <strong className={st.station}>{props.name}</strong>
                </>
            }
        </footer>
    )
}

export default AppFooter