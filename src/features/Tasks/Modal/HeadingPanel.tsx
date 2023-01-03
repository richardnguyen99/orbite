import { FC, HTMLAttributes } from "react";
import classNames from "classnames";

export interface Props {
  type: "add" | "update";
}

export type HeadingPanelType = FC<HTMLAttributes<HTMLParagraphElement> & Props>;

/**
 * Display a simple heading for the Modal based on what type is passed in.
 */
const HeadingPanel: HeadingPanelType = ({ type, ...rest }) => {
  const getClassNames = () => {
    return classNames("text-transparent bg-clip-text mr-2 bg-gradient-to-r ", {
      "to-lime-500 from-green-600": type === "add",
      "to-amber-500 from-orange-600": type === "update",
    });
  };

  const getActionName = () => {
    return type[0].toUpperCase() + type.slice(1);
  };

  return (
    <p {...rest}>
      <span className={getClassNames()}>{getActionName()}</span>
      Task
    </p>
  );
};

export default HeadingPanel;
