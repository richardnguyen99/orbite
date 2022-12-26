import Dropdown from "@components/Dropdown";

const TaskActionDropdown = () => {
  return (
    <Dropdown animation>
      <Dropdown.Toggler className="rounded-md bg-slate-400 dark:bg-slate-900 bg-opacity-30 px-4 py-2 text-[16px] leading-[1.2] font-medium hover:bg-opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 border border-transparent hover:border-slate-500/80 focus:border-slate-500 dark:hover:border-slate-700/80 dark:focus:border-slate-700">
        Actions
      </Dropdown.Toggler>
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
