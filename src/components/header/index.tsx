import React from "react";
import st from "./header.module.css";
import back from "../../assets/back-arrow.png";
import power from "../../assets/switch.png";
import {HProps} from "../../data_store/interfaces";

const AppHeader = (props: HProps) => {
  return (
    <header className={st.appHeader}>
      <a href="/#" onClick={e=>e.preventDefault()}><img src={back} className={st.back} alt={'go to back'}/></a>
      <strong className={st.title}>Stations</strong>
      <a href="/#" onClick={(e) => {
          e.preventDefault();
          props.onPower('');
      }}>
          <img src={power} className={st.power} alt={'power'} />
      </a>
    </header>
  )
}

export default AppHeader