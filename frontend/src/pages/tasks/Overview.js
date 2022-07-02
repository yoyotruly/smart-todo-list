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


  const [isOpen, setOpenModal] = React.useState(false);
  const openModal = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);

  const [count, setCount] = React.useState(0);
  const addCount = () => {
    console.log(count)
    setCount((prevCount) => prevCount + 1);
    console.log(count)
  }

  return (
    <div>
      <TopBar />
      <LeftSidebar />
      <MainContent tasksData={tasksData}/>

      <AddButton
        sx={addButtonStyles}
        handleClick={openModal}
      />
      <NewTaskModal
        isOpen={isOpen}
        handleClose={closeModal}
        addCount={addCount}
      />
    </div>
  )
}

export default Overview;
