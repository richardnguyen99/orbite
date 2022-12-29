/**
 * A React component that collapses, or hides, its content when the viewport is
 * matched with the specified value.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import { CFC } from "@typings/react";

const NavbarCollapse: CFC<HTMLDivElement> = ({ children, ...args }) => {
  return (
    <div {...args} className="hidden md:flex md:w-full">
      {children}
    </div>
  );
};

export default NavbarCollapse;
