import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import MenuItem from './MenuItem';

const leftSidebarWidth = 240;

export default function LeftSidebar() {
  return (
    <Drawer
      sx={{
        width: leftSidebarWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: leftSidebarWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >

      <Toolbar />

      <List dense>

        <MenuItem
          key={"Overview"}
          href="/tasks"
          text="Overview"
          icon={<SummarizeOutlinedIcon />}
        />

        <MenuItem
          key={"Today"}
          href="/tasks/today"
          text="Today"
          icon={<TodayOutlinedIcon />}
        />

        <MenuItem
          key={"Scheduled"}
          href="/tasks/scheduled"
          text="Scheduled"
          icon={<AccessAlarmOutlinedIcon />}
        />

        <MenuItem
          key={"Important"}
          href="/tasks/important"
          text="Important"
          icon={<StarBorderOutlinedIcon />}
        />

        <MenuItem
          key={"Done"}
          href="/tasks/done"
          text="Done"
          icon={<EventAvailableOutlinedIcon />}
        />

      </List>

      <List dense sx={{marginTop: "30px"}}>

        <MenuItem
          key={"To Eat"}
          href="/tasks/1"
          text="To Eat"
          icon={<SquareRoundedIcon color='primary'/>}
        />

        <MenuItem
          key={"To Buy"}
          href="/tasks/2"
          text="To Buy"
          icon={<SquareRoundedIcon color='warning'/>}
        />

        <MenuItem
          key={"To Read"}
          href="/tasks/3"
          text="To Read"
          icon={<SquareRoundedIcon color='secondary'/>}
        />

        <MenuItem
          key={"To Watch"}
          href="/tasks/4"
          text="To Watch"
          icon={<SquareRoundedIcon color='success'/>}
        />
      </List>

    </Drawer>
  );
}
