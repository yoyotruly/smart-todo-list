import * as React from "react";
import TopBar from "../../components/TopBar";
import LeftSidebar from "../../components/LeftSidebar";
import MainContent from '../../components/MainContent';
import AddButton from '../../components/AddButton';
import NewTaskModal from "../../components/NewTaskModal";

const addButtonStyles = {
  position: "fixed",
  left: 30,
  bottom: 30,
  zIndex: (theme) => theme.zIndex.drawer + 1
};


function Overview() {
  const [tasksData, setTasksData] = React.useState({});

  React.useEffect(() => {
    fetch(`http://localhost:8080/api/tasks`)
    .then(res => res.json())
    .then(data => setTasksData(data))
  }, [])

  const handleDelete = (id) => {
    setTasksData(prevTasksData => {
      return prevTasksData.filter(task => task.task_id !== id)
    })
  }

  // const handleDelete = (id) => {
  //   fetch(
  //     `http://localhost:8080/api/tasks/${id}`,
  //     {method: "DELETE"}
  //     )
  //     .then(res => res.json())
  //     .then(id => setTasksData(prevTasksData => {
  //       return prevTasksData.filter(task => task.task_id !== id)
  //     }))
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // }

  const [isOpen, setOpenModal] = React.useState(false);
  const openModal = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);

  return (
    <div>
      <TopBar />
      <LeftSidebar />
      <MainContent
        tasksData={tasksData}
        handleDelete={handleDelete}
      />

      <AddButton
        sx={addButtonStyles}
        handleClick={openModal}
      />

      <NewTaskModal
        isOpen={isOpen}
        handleClose={closeModal}
        tasksData={tasksData}
        setTasksData={setTasksData}
      />
    </div>
  )
}

export default Overview;
