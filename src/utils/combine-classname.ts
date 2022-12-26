import classNames from "classnames";

/**
 * A utility function that combines two classnames into one single classname as
 * a string.
 *
 * @param {string} defaultClassName Core classname of a component
 * @param {string} customizeClassName Customize classname for some special cases
 * @returns {string} A single classname as string
 */
export const combineClassName = (
  defaultClassName: string,
  customizeClassName: string | undefined
): string => {
  if (typeof customizeClassName === "undefined") return defaultClassName;

  return classNames(defaultClassName, {
    [customizeClassName as string]: true,
  });
};
