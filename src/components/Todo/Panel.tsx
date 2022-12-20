import { HTMLAttributes, FC } from "react";
import { ListUnorderedIcon, TagIcon } from "@primer/octicons-react";

import TodoPanelButton from "./PanelButton";
import TodoList from "./List";

const TodoPanel: FC<HTMLAttributes<HTMLDivElement>> = ({ ...args }) => {
  return (
    <div {...args} aria-label="Todo Panel" className="relative mt-4 text-base">
      <div className="flex items-center h-10 z-[1] sticky w-full shadow-[inset_0px_-1px_0px_rgb(47,47,47)]">
        <div className="flex items-center m-0 h-full flex-grow">
          <div className="inline-flex m-0 h-full space-x-2">
            <TodoPanelButton
              icon={<ListUnorderedIcon size={16} />}
              text="List"
            />
            <TodoPanelButton icon={<TagIcon size={16} />} text="Tags" />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2 "></div>
      <TodoList />
    </div>
  );
};

export default TodoPanel;
