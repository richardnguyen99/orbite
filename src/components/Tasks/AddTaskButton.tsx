import { useState } from "react";

import AddNewTaskModal from "./AddTaskModal";
import Icon from "@components/Icon";
import PrimaryButton from "@components/Button/PrimaryButton";

const AddNewTaskButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <PrimaryButton
        icon={Icon.NewTask}
        size="base"
        color="green"
        onClickCallback={() => setOpen(true)}
      >
        New Task
      </PrimaryButton>

      <AddNewTaskModal open={open} setOpen={setOpen} />
    </>
  );
};

export default AddNewTaskButton;
