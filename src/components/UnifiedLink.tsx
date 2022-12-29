import { Link, NavLink } from "react-router-dom";

import { CFC } from "@typings/react";
import classNames from "classnames";

const getDefaultClassName = () => {
  return "no-underline";
};

const getHoverClassName = () => {
  return "group-hover:text-blue-400/90 dark:group-hover:text-blue-400";
};

const getActiveClassName = () => {
  return "text-indigo-500 group-hover:text-indigo-600";
};

// Utility function to select either passed-in value or default value.
const shouldUseThis = (value: string | undefined, defaultValue: string) => {
  if (typeof value !== "undefined" && value.length > 0) {
    return value;
  }

  return defaultValue;
};

export interface UnifiedLinkProps {
  /**
   * An attribute for anchor tags to go to the URL. If this prop is passed,
   * anchor tag, <a></a> will be used.
   *
   * @default undefined
   * @public
   */
  href?: string;

  /**
   * An link props for Router Link to navigate between urls in this app. If this
   * prop is passed, Router Link from react-router-dom will be used. If both
   * href and to are passed, href and its rendering will override. If none is
   * passed, Router Link will still be used with default value `#`.
   *
   * @default "#"
   * @public
   */
  to?: string;

  /**
   * Specify what type should be used as each type has different additional
   * functionalities if Router Link is specified.
   *
   * @default "normal"
   * @public
   */
  type?: "normal" | "nav";

  /**
   * Specify what style should be used if it's being hovered.
   *
   * @default undefined
   * @public
   */
  hoverClassName?: string;

  /**
   * Specify what style should be used if it's in active state. It's mainly used
   * for Router NavLink.
   *
   * @default undefined
   * @public
   */
  activeClassName?: string;
}

export type UnifiedLinkType = CFC<HTMLAnchorElement, UnifiedLinkProps>;

/**
 * A customizable, unified class between HTML native anchor tag and React-Router
 * Link for reusable components that may navigate to both internal and external
 * pages.
 *
 * @example
 *
 * ```tsx
 * import UnifiedLink from "@components/UnifiedLink";
 *
 * <UnifiedLink href="https://google.com" />  // anchor tag will be rendered
 * <UnifiedLink to="/about" />                // Router Link will be rendered
 *
 * <UnifiedLink id="about-link" to="/about" className="..." /> // other props
 *
 * <UnifiedLink to="/about">About</UnifiedLink> // render link with content
 * ```
 */
const UnifiedLink: UnifiedLinkType = ({
  href,
  to = "#",
  type = "normal",
  hoverClassName,
  activeClassName,
  children,
  ...rest
}) => {
  const getClassName = (active = false) => {
    const finalDefaultClassName = shouldUseThis(
      rest.className,
      getDefaultClassName()
    );

    const finalHoverClassName = shouldUseThis(
      hoverClassName,
      getHoverClassName()
    );

    const finalActiveClassName = shouldUseThis(
      activeClassName,
      getActiveClassName()
    );

    return classNames({
      [finalDefaultClassName]: true,
      [finalHoverClassName]: true,
      [finalActiveClassName]: active,
    });
  };

  if (typeof href !== "undefined" && href.length > 0) {
    return (
      <a
        {...rest}
        href={href}
        target="_blank"
        rel="noreferrer"
        className={getClassName()}
      >
        {children}
      </a>
    );
  }

  if (to && type === "nav") {
    return (
      <NavLink
        {...rest}
        to={to}
        className={({ isActive }) => getClassName(isActive)}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <Link {...rest} to={to} className={getActiveClassName()}>
      {children}
    </Link>
  );
};

export default UnifiedLink;
