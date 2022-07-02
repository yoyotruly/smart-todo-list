import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Checkboxes() {

  const handleClick = (event) => {
    const { checked } = event.target;
    console.log(event.target)
  }

  return (
    <Checkbox
      icon={<RadioButtonUncheckedIcon color="primary" />}
      checkedIcon={<CheckCircleIcon color="disabled" />}
      size="large"
      sx={{
        paddingLeft: 0,
        marginRight: "10px"
      }}
      onClick={handleClick}

    />
  );
}
