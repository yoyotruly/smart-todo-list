import List from '@mui/material/List';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import MenuListItem from './MenuListItem';
import { labels } from "../data/labels";

const colors = ["primary", "warning", "secondary", "success"]

const labelPageElements = labels.map(label => (
  <MenuListItem
    key={label.id}
    href={`/tasks/${label.id}`}
    text={label.name}
    icon={<SquareRoundedIcon color={colors[label.id - 1]}/>}
  />
))

export default function MenuList(props) {
  return (
    <List dense sx={props.style}>
      {labelPageElements}
    </List>
  )
}
