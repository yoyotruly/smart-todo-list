import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';

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

          <ListItem
            key={"Overview"}
            component="a"
            href="/tasks"
          >
            <ListItemButton>
              <ListItemIcon>
                <SummarizeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"Overview"} />
            </ListItemButton>
          </ListItem>

          <ListItem key={"Today"}>
            <ListItemButton>
              <ListItemIcon>
                <TodayOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"Today"} />
            </ListItemButton>
          </ListItem>

          <ListItem key={"Scheduled"}>
            <ListItemButton>
              <ListItemIcon>
                <AccessAlarmOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"Scheduled"} />
            </ListItemButton>
          </ListItem>

          <ListItem
            key={"Important"}
            component="a"
            href="/tasks/high"
          >
            <ListItemButton>
              <ListItemIcon>
                <StarBorderOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"Important"} />
            </ListItemButton>
          </ListItem>

          <ListItem
            key={"Done"}
            component="a"
            href="/tasks/done"
          >
            <ListItemButton>
              <ListItemIcon>
                <EventAvailableOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={"Done"} />
            </ListItemButton>
          </ListItem>

        </List>

        <List
          dense
          sx={{marginTop: "30px"}}
        >
          <ListItem
            key={"To Eat"}
            component="a"
            href="/tasks/1"
          >
            <ListItemButton>
              <ListItemIcon>
                <SquareRoundedIcon color='primary'/>
              </ListItemIcon>
              <ListItemText primary={"To Eat"} />
            </ListItemButton>
          </ListItem>

          <ListItem
            key={"To Buy"}
            component="a"
            href="/tasks/2"
          >
            <ListItemButton>
              <ListItemIcon>
                <SquareRoundedIcon color="warning"/>
              </ListItemIcon>
              <ListItemText primary={"To Buy"} />
            </ListItemButton>
          </ListItem>

          <ListItem
            key={"To Read"}
            component="a"
            href="/tasks/3"
          >
            <ListItemButton>
              <ListItemIcon>
                <SquareRoundedIcon color="secondary"/>
              </ListItemIcon>
              <ListItemText primary={"To Read"} />
            </ListItemButton>
          </ListItem>

          <ListItem
            key={"To Watch"}
            component="a"
            href="/tasks/4"
          >
            <ListItemButton>
              <ListItemIcon>
                <SquareRoundedIcon color="success"/>
              </ListItemIcon>
              <ListItemText primary={"To Watch"} />
            </ListItemButton>
          </ListItem>

        </List>
      </Drawer>
  );
}
