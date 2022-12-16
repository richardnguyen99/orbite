/**
 * Main application for Orbite.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import * as React from "react";

import { CFC } from "@typings/react";
import Layout from "@components/Layout";

const Root: CFC<HTMLDivElement> = () => {
  return (
    <Layout>
      <h1>Orbite</h1>
    </Layout>
  );
};

export default Root;
