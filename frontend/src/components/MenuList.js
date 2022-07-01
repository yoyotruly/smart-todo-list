import List from '@mui/material/List';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
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

const labelPages = [
  {
    labelId: 1,
    label: "To Eat",
    color: "primary"
  },
  {
    labelId: 2,
    label: "To Buy",
    color: "warning"
  },
  {
    labelId: 3,
    label: "To Read",
    color: "secondary"
  },
  {
    labelId: 4,
    label: "To Watch",
    color: "success"
  }
];

const pageElements = pages.map(page => (
  <MenuListItem
    key={page.name}
    href={`/tasks/${page.name}`}
    text={page.name}
    icon={page.icon}
  />
))

const labelPageElements = labelPages.map(labelPage => (
  <MenuListItem
    key={labelPage.label}
    href={`/tasks/${labelPage.labelId}`}
    text={labelPage.label}
    icon={<SquareRoundedIcon color={labelPage.color}/>}
  />
))

export default function MenuList() {
  return (
    <>
      <List dense>
        {pageElements}
      </List>

      <List dense sx={{marginTop: "30px"}}>
        {labelPageElements}
      </List>
    </>
  )
}
