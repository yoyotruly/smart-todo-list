import List from '@mui/material/List';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import MenuListItem from './MenuListItem';

const pages = [
  {
    name: "Overview",
    icon: <SummarizeOutlinedIcon />
  },
  {
    name: "Today",
    icon: <TodayOutlinedIcon />
  },
  {
    name: "Scheduled",
    icon: <AccessAlarmOutlinedIcon />
  },
  {
    name: "Important",
    icon: <StarBorderOutlinedIcon />
  },
  {
    name: "Done",
    icon: <EventAvailableOutlinedIcon />
  }
]

export default function MenuList(props) {
  const pageElements = pages.map(page => (
    <MenuListItem
      key={page.name}
      href={`/tasks/${page.name}`}
      text={page.name}
      icon={page.icon}
    />
  ))

  return (
    <List dense sx={props.style}>
      {pageElements}
    </List>
  )
}
