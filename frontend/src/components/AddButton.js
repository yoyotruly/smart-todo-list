import * as React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function AddButton(props) {

  return (
    <Fab
      color="primary"
      onClick={props.handleClick}
      sx={{...props.sx}}
    >
      <AddIcon/>
    </Fab>
  );
}
