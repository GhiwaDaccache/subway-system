import React from 'react';
import {useState } from "react";

import './Facility.css'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';


function Facility(
    text,
    clickHandler,
) {  
    const [isFacility, setIsFacility]  = useState({
        wheelchair_accessibility: false, wifi: false, toilets: true
    });

    return(
        <div className='facility white-bg flex align-center justify-between'>
            {text} 
            <span
            onClick={() => {
                !isFacility ? setIsFacility(true) : setIsFacility(false)
                }}>
            {!isFacility ? <RadioButtonUncheckedIcon value={wheelchair_accessibility}/> : <RadioButtonCheckedIcon/>}
            </span>
        </div>

    )}

export default Facility