import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import MenuListPages from './MenuListPages';
import MenuListLabels from './MenuListLabels';
import { useTheme } from '@mui/material/styles';

const leftSidebarWidth = 240;

const leftSidebarStyles = {
  width: leftSidebarWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: leftSidebarWidth,
    boxSizing: 'border-box',
  }
}

export default function LeftSidebar() {
  const theme = useTheme();
  const logo = theme.palette.mode === 'dark' ? "logo-dark.png" : "logo-light.png";

  return (
    <Drawer
      sx={leftSidebarStyles}
      variant="permanent"
      anchor="left"
    >

      <Toolbar>
        <img
          src={`${process.env.PUBLIC_URL}/${logo}`}
          alt="logo"
          height="52px"
        />
      </Toolbar>

      <MenuListPages style={{marginTop: "20px"}} />
      <MenuListLabels style={{marginTop: "35px"}} />

    </Drawer>
  );
}
