import classNames from "classnames";
import {
  useState,
  FC,
  HTMLAttributes,
  useCallback,
  KeyboardEvent,
  useRef,
} from "react";

export interface Props {
  initialName?: string;
  onNameChange?: (newName: string) => void;
}

const TaskItemHeading: FC<Props & HTMLAttributes<HTMLHeadingElement>> = ({
  initialName = "Todo",
  onNameChange,
  ...args
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [title, setTitle] = useState(initialName || "");

  const trimEscapeCharacters = (str: string) => {
    return str
      .replace(/&nbsp;/g, "")
      .replace(/&amp;/g, "&")
      .replace(/&gt;/g, ">")
      .replace(/&lt;/g, "<");
  };

  const disableNewlines = useCallback(
    (event: KeyboardEvent<HTMLHeadingElement>) => {
      const keyCode = event.key || event.which;

      // If the user presses the Enter key
      if (keyCode == 13 || keyCode === "Enter") {
        // Prevent the component from inserting a line break
        event.preventDefault();
        // Unfocus the component (no more typing).
        event.currentTarget.blur();
      }
    },
    []
  );

  const onBlurHandler = useCallback(() => {
    let capturedContent = initialName;
    // Prevent empty string from appearing. Instead, rendering initial value
    if (titleRef && titleRef.current) {
      titleRef.current.innerHTML = titleRef.current.textContent || initialName;
      capturedContent = titleRef.current.textContent || initialName;

      if (onNameChange) onNameChange(capturedContent);
      setTitle(capturedContent);
    }
  }, [initialName, onNameChange]);

  const getContentEditableClassNames = () => {
    return classNames({
      "text-lg font-bold  md:text-lg lg:text-xl": true,
      "focus:outline-none": true,
    });
  };

  return (
    <h1
      ref={titleRef}
      {...args}
      aria-label="Todo Title"
      data-initial-content={initialName}
      contentEditable={true}
      suppressContentEditableWarning={true}
      onKeyDown={disableNewlines}
      onBlur={onBlurHandler}
      className={getContentEditableClassNames()}
    >
      {trimEscapeCharacters(title)}
    </h1>
  );
};

export default TaskItemHeading;
