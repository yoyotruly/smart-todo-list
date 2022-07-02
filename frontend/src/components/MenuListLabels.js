import React from "react";
import List from '@mui/material/List';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import MenuListItem from './MenuListItem';

export default function MenuList(props) {

  const [labelsData, setLabelsData] = React.useState({});
  React.useEffect(() => {
    fetch("http://localhost:8080/api/labels")
      .then(res => res.json())
      .then(data => setLabelsData(data))
  }, []);

  const colors = ["primary", "warning", "secondary", "success"]

  const labelPageElements = [];
  for (const [key, label] of Object.entries(labelsData)) {
    const labelPageElement = (
      <MenuListItem
        key={key}
        href={`/tasks/${label.id}`}
        text={label.name}
        icon={<TagRoundedIcon color={colors[key]}/>}
      />
    )
    labelPageElements.push(labelPageElement)
  }

  return (
    <List dense sx={props.style}>
      {labelPageElements}
    </List>
  )
}
