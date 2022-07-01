import List from '@mui/material/List';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import MenuListItem from './MenuListItem';

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

const labelPageElements = labelPages.map(labelPage => (
  <MenuListItem
    key={labelPage.label}
    href={`/tasks/${labelPage.labelId}`}
    text={labelPage.label}
    icon={<SquareRoundedIcon color={labelPage.color}/>}
  />
))

export default function MenuList(props) {
  return (
    <List dense sx={props.style}>
      {labelPageElements}
    </List>
  )
}
