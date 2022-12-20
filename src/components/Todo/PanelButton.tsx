import { FC, HTMLAttributes, ReactElement } from "react";

import { CMouseEvCallback } from "@typings/react";

export interface TodoPanelButtonProps {
  icon?: ReactElement;
  text: string;
  onClickCallback?: CMouseEvCallback<HTMLDivElement>;
}

const TodoPanelButton: FC<
  TodoPanelButtonProps & HTMLAttributes<HTMLDivElement>
> = ({ icon, text, ...args }) => {
  return (
    <div
      {...args}
      aria-label="Todo Panel Button"
      className="group flex flex-row active "
    >
      <div className="flex items-center bg-none h-full pt-1 group-[.active]:border-b">
        <div className="select-none cursor-pointer flex items-center flex-shrink-0 whitespace-nowrap h-7 rounded-[4px] text-sm px-2 font-medium max-w-[280px]  hover:bg-neutral-800">
          {icon && <div className="inline-flex item-center mr-2">{icon}</div>}
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default TodoPanelButton;
