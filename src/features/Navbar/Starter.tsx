import { CFC } from "@typings/react";

export type NavbarStarterType = CFC<HTMLDivElement>;

const NavbarStarter: NavbarStarterType = ({ children, ...rest }) => {
  return (
    <div
      {...rest}
      className="sticky top-0 border-b-0 z-[1000] w-full backdrop-blur flex-none border-slate-200/10 dark:border-b transition"
    >
      {children}
    </div>
  );
};

export default NavbarStarter;
