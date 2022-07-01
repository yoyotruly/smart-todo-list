import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import MenuList from './MenuList';

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
      <MenuList />

    </Drawer>
  );
}
