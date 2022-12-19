/**
 * Main application for Orbite.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import type { CFC } from "@typings/react";
import Components from "@components";
import Container from "@components/Container";

const { Layout, Todo } = Components;

const Root: CFC<HTMLDivElement> = () => {
  return (
    <Layout>
      <Container>
        <div className="mt-16 px-4 lg:px-8">
          <Todo />
        </div>
      </Container>
    </Layout>
  );
};

export default Root;
