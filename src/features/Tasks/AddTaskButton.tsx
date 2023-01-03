import React, { useState } from "react";

import Icon from "@components/Icon";
import Button from "@components/Button";

const AddNewTaskModal = React.lazy(() => import("./Modal"));

const AddNewTaskButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        icon={Icon.NewTask}
        rounded
        size="base"
        color="green"
        onClick={() => setOpen(true)}
      >
        New Task
      </Button>

      <React.Suspense>
        <AddNewTaskModal open={open} setOpen={setOpen} type="add" />
      </React.Suspense>
    </>
  );
};

export default AddNewTaskButton;
