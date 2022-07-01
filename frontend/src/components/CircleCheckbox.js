import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Checkboxes() {
  return (
    <Checkbox
      icon={<RadioButtonUncheckedIcon />}
      checkedIcon={<CheckCircleIcon />}
      size="large"
      sx={{
        paddingLeft: 0,
        marginRight: "10px"
      }}
    />
  );
}
