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
      capturedContent = (titleRef.current.textContent || initialName).slice(
        0,
        50
      );
      titleRef.current.innerHTML = capturedContent;

      if (onNameChange && title !== initialName) onNameChange(capturedContent);
      setTitle(capturedContent);
    }
  }, [initialName, onNameChange, title]);

  const getContentEditableClassNames = () => {
    return classNames({
      "text-lg font-bold  md:text-lg lg:text-xl": true,
      "focus:outline-none": true,
      "flex-1 text-ellipsis max-h-7 overflow-hidden break-all relative truncate":
        true,
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
      <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-slate-900"></div>
    </h1>
  );
};

export default TaskItemHeading;
