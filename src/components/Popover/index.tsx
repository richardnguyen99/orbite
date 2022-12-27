import React from "react";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { Popover } from "@headlessui/react";

const MyPopover = () => {
  const [selected, setSelected] = React.useState<Date>();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }

  return (
    <Popover className="relative">
      <Popover.Button>Solutions</Popover.Button>

      <Popover.Panel className="absolute z-10">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          footer={footer}
        />
      </Popover.Panel>
    </Popover>
  );
};

export default MyPopover;
