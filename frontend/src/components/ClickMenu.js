import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

export default function DialogSelect(props) {

  const [anchorEl, setAnchorElUserMenu] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleOpen = (event) => setAnchorElUserMenu(event.currentTarget)
  const handleClose = () => setAnchorElUserMenu(null);

  return (
    <div>
      <IconButton onClick={handleOpen}>
        {props.icon}
      </IconButton>

      {
        props.menuItems &&
        <Menu
          anchorEl={anchorEl}
          id="click-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                left: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'left', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        >

          {props.menuItems.map(item => {
            return (
              <MenuItem onClick={() => props.selectMenuItem(item.name)}>
                <Typography variant="body2">
                  {item.name}
                </Typography>
              </MenuItem>
              )
            })}

        </Menu>
      }

    </div>
  );
}

