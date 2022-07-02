import * as React from "react";
import TopBar from "../../components/TopBar";
import LeftSidebar from "../../components/LeftSidebar";
import MainContent from '../../components/MainContent';
import AddButton from '../../components/AddButton';
import NewTaskModal from "../../components/NewTaskModal";

const addButtonStyles = {
  position: "absolute",
  left: 30,
  bottom: 30,
  zIndex: (theme) => theme.zIndex.drawer + 1
};


function Overview() {
  const [isOpen, setOpenModal] = React.useState(false);
  const openModal = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);

  return (
    <div>
      <TopBar />
      <LeftSidebar />
      <MainContent />

      <AddButton
        sx={addButtonStyles}
        handleClick={openModal}
      />
      <NewTaskModal
        isOpen={isOpen}
        handleClose={closeModal}
      />
    </div>
  )
}

export default Overview;
