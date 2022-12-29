/**
 * A React component that displays a general layout template for all pages
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import { CFC } from "@typings/react";
import Navbar from "@features/Navbar";

const Layout: CFC<HTMLDivElement> = ({ children, ...rest }) => {
  return (
    <>
      <Navbar />
      <main {...rest} className="min-h-screen">
        {children}
      </main>
      <footer>Something</footer>
    </>
  );
};

export default Layout;
