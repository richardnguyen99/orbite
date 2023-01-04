import { FC } from "react";
import { DotFillIcon, FeedStarIcon } from "@primer/octicons-react";

import Dropdown from "@components/Dropdown";

const items = [
  {
    name: "Work",
    component: <DotFillIcon className="fill-red-500 mr-3" />,
  },
  {
    name: "Personal",
    component: <DotFillIcon className="fill-green-500 mr-3" />,
  },
  {
    name: "School",
    component: <DotFillIcon className="fill-sky-500 mr-3" />,
  },
  {
    name: "Chores",
    component: <DotFillIcon className="fill-indigo-500 mr-3" />,
  },
  {
    name: "Special",
    component: <FeedStarIcon className="fill-yellow-500 mr-3" />,
  },
];

export interface Props {
  category?: string;
  onSelectCategory: (newValue: string) => void;
}

const Category: FC<Props> = ({ category, onSelectCategory }) => {
  const getSelectionDisplayName = () => {
    return category !== "" ? category : "Select one";
  };

  return (
    <div className="ml-auto w-5/12">
      <label
        htmlFor="category"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Category
      </label>
      <Dropdown animation id="category">
        <Dropdown.Toggler className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-slate-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
          {getSelectionDisplayName()}
        </Dropdown.Toggler>
        <Dropdown.List>
          <div className="px-1.5 py-1.5">
            {items.map((item, _) => (
              <Dropdown.Item
                key={`dropdownitem-${item.name}`}
                onClick={() => onSelectCategory(item.name)}
              >
                <div className="inline-flex items-center">
                  {item.component}
                  {item.name}
                </div>
              </Dropdown.Item>
            ))}
          </div>
        </Dropdown.List>
      </Dropdown>
    </div>
  );
};

export default Category;
