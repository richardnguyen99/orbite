import Dropdown from "@components/Dropdown";

const TaskActionDropdown = () => {
  return (
    <Dropdown animation>
      <Dropdown.Toggler>Actions</Dropdown.Toggler>
      <Dropdown.List>
        <div className="px-1.5 py-1.5">
          <Dropdown.Item>Add</Dropdown.Item>
        </div>
        <div className="px-1.5 py-1.5">
          <Dropdown.Item>Add</Dropdown.Item>
          <Dropdown.Item>Add</Dropdown.Item>
          <Dropdown.Item>Add</Dropdown.Item>
          <Dropdown.Item>Add</Dropdown.Item>
        </div>
        <div className="px-1.5 py-1.5">
          <Dropdown.Item>Add</Dropdown.Item>
        </div>
      </Dropdown.List>
    </Dropdown>
  );
};

export default TaskActionDropdown;
