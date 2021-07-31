import React from "react";
import up from '../../assets/plus.png';
import down from '../../assets/minus.png';
import radioImg from '../../assets/radio_img@2x.png';
import {BProps} from "../../data_store/interfaces";
import st from './body.module.css'

const AppBody = (props: BProps) => {
    return(
        <div className={st.appBody}>
            {props.list.map((l, index) => (
                <div className={st.listItemWrap}>
                    <div className={`${st.listLogo} ${props.selected === l.name ? st.active : ''}`}>
                        <a href="#"><img className={st.upDown} src={down} alt={'down'}/></a>
                        <img className={st.radioLogo} src={radioImg} alt={'logo'}/>
                        <a href="#"><img className={st.upDown} src={up} alt={'up'}/></a>
                    </div>
                    <div className={st.listItem} onClick={() => props.onSelect(props.list[index].name)}>
                        <div className={st.listName}>{l.name}</div>
                        <div className={st.listFreq}>{l.frequency}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AppBody