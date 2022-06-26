import { useParams } from "react-router-dom";

function TaskLabel() {
  const { labelId } = useParams()

  return (
    <div>This is task page for label {labelId}</div>
  )
}

export default TaskLabel;
