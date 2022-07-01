import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import MenuListPages from './MenuListPages';
import MenuListLabels from './MenuListPages';

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
  return (
    <Drawer
      sx={leftSidebarStyles}
      variant="permanent"
      anchor="left"
    >

      <Toolbar />
      <List dense>
        <MenuListPages />
      </List>

      <List dense sx={{marginTop: "30px"}}>
        <MenuListLabels />
      </List>

    </Drawer>
  );
}
