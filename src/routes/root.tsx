/**
 * Main application for Orbite.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import * as React from "react";

import type { CFC } from "@typings/react";
import Components from "@components";

const { Layout } = Components;

const Root: CFC<HTMLDivElement> = () => {
  return <Layout></Layout>;
};

export default Root;
