/**
 * A React component that displays a top-level navigation bar to routing between
 * pages.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import { CFC } from "@typings/react";
import NavbarWrapper from "./Wrapper";

const Navbar: CFC<HTMLDivElement> = ({ children, ...rest }) => {
  return (
    <div
      {...rest}
      className="sticky top-0 border-b-0 z-[1000] w-full backdrop-blur flex-none border-slate-200/10 dark:border-b transition"
    >
      {children}
    </div>
  );
};

export default Object.assign(Navbar, {
  Wrapper: NavbarWrapper,
});
