/**
 * A React component that displays a general layout template for all pages
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import { CFC } from "@typings/react";
import Navbar from "./Navbar";
import Container from "./Container";

const Layout: CFC<HTMLDivElement> = ({ children, ...rest }) => {
  return (
    <main {...rest}>
      <Navbar>
        <Container>
          <Navbar.Wrapper>Hello, World</Navbar.Wrapper>
        </Container>
      </Navbar>
      {children}
      <footer>Something</footer>
    </main>
  );
};

export default Layout;
