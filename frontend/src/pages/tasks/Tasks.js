import * as React from "react";
import TopBar from "../../components/TopBar";
import LeftSidebar from "../../components/LeftSidebar";
import MainContent from '../../components/MainContent';
import FloatingAddButton from '../../components/FloatingAddButton';
import NewTaskModal from "../../components/NewTaskModal";

const floatingAddButtonStyles = {
  position: "absolute",
  left: 30,
  bottom: 30,
  zIndex: (theme) => theme.zIndex.drawer + 1
};


function Tasks() {
  const [isOpen, setOpenModal] = React.useState(false);
  const openModal = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);

  return (
    <div>
      <TopBar />
      <LeftSidebar />
      <MainContent />

      <FloatingAddButton
        sx={floatingAddButtonStyles}
        handleClick={openModal}
      />
      <NewTaskModal
        isOpen={isOpen}
        handleClose={closeModal}
      />
    </div>
  )
}

export default Tasks;
