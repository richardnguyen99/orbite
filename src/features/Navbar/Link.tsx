import classNames from "classnames";

import UnifiedLink, { UnifiedLinkProps } from "@components/UnifiedLink";
import { FC, HTMLAttributes, ReactElement } from "react";

export interface NavLinkProps extends UnifiedLinkProps {
  icon?: ReactElement;
  text?: string;

  children?: string;
}

export type NavLinkType = FC<NavLinkProps & HTMLAttributes<HTMLLIElement>>;

const NavLink: NavLinkType = ({ to, icon, text, href, children, ...rest }) => {
  const defaultClassNames = () =>
    classNames("group-hover:text-blue-400/90 dark:group-hover:text-blue-400");

  const activeClassNames = () =>
    classNames("text-indigo-500 group-hover:text-indigo-600");

  const Child = () => (
    <div className="flex space-x-2 items-center">
      {icon || null}
      {<p>{text || children}</p>}
    </div>
  );

  return (
    <li
      {...rest}
      className="group list-none py-2 px-2 rounded-md hover:bg-slate-300 hover:dark:bg-slate-700/75 "
    >
      <UnifiedLink
        to={to}
        href={href}
        type="nav"
        hoverClassName={defaultClassNames()}
        activeClassName={activeClassNames()}
      >
        <Child />
      </UnifiedLink>
    </li>
  );
};

export default NavLink;
