import { useState, FC, HTMLAttributes } from "react";

export interface TodoTitleProps {
  initialTitle?: string;
}

const TodoTitle: FC<TodoTitleProps & HTMLAttributes<HTMLHeadingElement>> = ({
  initialTitle,
  ...args
}) => {
  const [title, setTitle] = useState(initialTitle);

  return (
    <h1 {...args} contentEditable={true} suppressContentEditableWarning={true}>
      {title}
    </h1>
  );
};

export default TodoTitle;
