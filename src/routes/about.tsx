/**
 * About page for Orbite. (/about)
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import { CFC } from "@typings/react";
import { MarkGithubIcon } from "@primer/octicons-react";

import Components from "@components";

const { Layout, Container } = Components;

const About: CFC<HTMLDivElement> = () => {
  return (
    <Layout>
      <Container>
        <div className="py-16 px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-semibold md:text-7xl md:font-extrabold lg:text-9xl  ">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-400">
                Orbite
              </span>
            </h1>
            <h3 className="text-xl font-semibold md:text-2xl md:font-bold lg:text-4xl  mt-6">
              Coordinate your work like orbits🪐!
            </h3>
            <a
              href="https://github.com/richardnguyen99/orbite"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center font-semibold text-base  lg:text-lg mt-6 p-4 bg-slate-300/50 hover:bg-slate-300/90 dark:bg-github border  dark:border-neutral-700 dark:hover:border-white rounded-lg dark:text-white"
            >
              <MarkGithubIcon className="mr-3 w-4 h-4 lg:w-6 lg:h-6" />
              Visit me on Github
            </a>
          </div>
        </div>
        <hr className="w-32 md:w-64 lg:w-80 h-2 border-0 rounded-full bg-indigo-300 dark:bg-indigo-400 mx-auto" />
      </Container>
    </Layout>
  );
};

export default About;
