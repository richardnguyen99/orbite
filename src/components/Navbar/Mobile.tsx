/**
 * A React component that display its content when mobile viewport is matched.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import { CFC } from "@typings/react";

const NavbarMobile: CFC<HTMLDivElement> = ({ children, ...args }) => {
  return (
    <div {...args} className="ml-auto md:hidden">
      {children}
    </div>
  );
};

export default NavbarMobile;
