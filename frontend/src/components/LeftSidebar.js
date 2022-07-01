import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import MenuListItem from './MenuListItem';

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

        <MenuListItem
          key={"Overview"}
          href="/tasks"
          text="Overview"
          icon={<SummarizeOutlinedIcon />}
        />

        <MenuListItem
          key={"Today"}
          href="/tasks/today"
          text="Today"
          icon={<TodayOutlinedIcon />}
        />

        <MenuListItem
          key={"Scheduled"}
          href="/tasks/scheduled"
          text="Scheduled"
          icon={<AccessAlarmOutlinedIcon />}
        />

        <MenuListItem
          key={"Important"}
          href="/tasks/important"
          text="Important"
          icon={<StarBorderOutlinedIcon />}
        />

        <MenuListItem
          key={"Done"}
          href="/tasks/done"
          text="Done"
          icon={<EventAvailableOutlinedIcon />}
        />

      </List>

      <List dense sx={{marginTop: "30px"}}>

        <MenuListItem
          key={"To Eat"}
          href="/tasks/1"
          text="To Eat"
          icon={<SquareRoundedIcon color='primary'/>}
        />

        <MenuListItem
          key={"To Buy"}
          href="/tasks/2"
          text="To Buy"
          icon={<SquareRoundedIcon color='warning'/>}
        />

        <MenuListItem
          key={"To Read"}
          href="/tasks/3"
          text="To Read"
          icon={<SquareRoundedIcon color='secondary'/>}
        />

        <MenuListItem
          key={"To Watch"}
          href="/tasks/4"
          text="To Watch"
          icon={<SquareRoundedIcon color='success'/>}
        />
      </List>

    </Drawer>
  );
}
