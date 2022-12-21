/**
 *
 */

import { CFC } from "@typings/react";

export interface RootSectionProps {
  title: string;
}

const RootSection: CFC<HTMLDivElement> = ({ title, children, ...args }) => {
  return (
    <section {...args} className="mt-12">
      <h3 className="relative inline-block text-lg font-thin tracking-widest text-slate-400 mb-8 after:block after:absolute after:inset-0 after:bg-cyan-600 after:top-8 after:w-6 after:h-1">
        {title}
      </h3>
      {children}
    </section>
  );
};

export default RootSection;
