import { FC, HTMLAttributes, useId } from "react";
import { DropdownItemProps } from "./types";

interface Props {
  items: DropdownItemProps[];
}

export const RenderedItems: FC<Props & HTMLAttributes<HTMLDivElement>> = ({
  items,
  ...rest
}) => {
  const internalId = useId();

  return (
    <div {...rest}>
      {items.map((item, i) => (
        <div key={`${internalId}-${i}`} />
      ))}
    </div>
  );
};
