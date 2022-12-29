import React, { useState } from "react";

import Icon from "@components/Icon";
import PrimaryButton from "@components/Button/PrimaryButton";

//import AddNewTaskModal from "./AddTaskModal";

const AddNewTaskModal = React.lazy(() => import("./AddTaskModal"));

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

      <React.Suspense>
        <AddNewTaskModal open={open} setOpen={setOpen} />
      </React.Suspense>
    </>
  );
};

export default AddNewTaskButton;
