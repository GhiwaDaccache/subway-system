import React from 'react';
import { useState } from 'react';

import './Facility.css';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

function Facility({ text, status, clickHandler }) {
  console.log(text);
  return (
    <div className="facility white-bg flex align-center justify-between">
      {text}
      <span
        onClick={() => {
          clickHandler();
        }}
      >
        {!status ? <RadioButtonUncheckedIcon /> : <RadioButtonCheckedIcon />}
      </span>
    </div>
  );
}

export default Facility;
