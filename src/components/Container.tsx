/**
 * A React component that centralize its content.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

import { CFC } from "@typings/react";

const Container: CFC<HTMLDivElement> = ({ children, ...rest }) => {
  return (
    <div {...rest} className="max-w-7xl mx-auto">
      {children}
    </div>
  );
};

export default Container;
