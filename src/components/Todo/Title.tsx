import classNames from "classnames";
import {
  useState,
  FC,
  HTMLAttributes,
  useCallback,
  KeyboardEvent,
  useRef,
} from "react";

export interface TodoTitleProps {
  initialTitle?: string;
}

const TodoTitle: FC<TodoTitleProps & HTMLAttributes<HTMLHeadingElement>> = ({
  initialTitle = "Todo",
  ...args
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [title, setTitle] = useState(initialTitle || "");

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
      let capturedContent = "";

      // If the user presses the Enter key
      if (keyCode == 13 || keyCode === "Enter") {
        // Prevent the component from inserting a line break
        event.preventDefault();
        // Unfocus the component (no more typing).
        event.currentTarget.blur();

        // Prevent empty string from appearing. Instead, rendering initial value
        if (titleRef && titleRef.current) {
          titleRef.current.innerHTML =
            titleRef.current.textContent || initialTitle;
          capturedContent = titleRef.current.textContent || "";
        }
      }

      setTitle(capturedContent || "Todo");
    },
    []
  );

  const getContentEditableClassNames = () => {
    return classNames({
      "text-xl md:text-2xl lg:text-4xl": true,
      "focus:outline-none": true,
    });
  };

  return (
    <h1
      ref={titleRef}
      {...args}
      data-initial-content={initialTitle}
      contentEditable={true}
      suppressContentEditableWarning={true}
      onKeyDown={disableNewlines}
      className={getContentEditableClassNames()}
    >
      {trimEscapeCharacters(title)}
    </h1>
  );
};

export default TodoTitle;
