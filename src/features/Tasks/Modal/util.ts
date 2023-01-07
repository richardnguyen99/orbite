export const getRingClassNames = (type: "add" | "update") => {
  if (type === "add")
    return "focus:ring-green-400 focus:border-green-400 dark:focus:ring-green-500 dark:focus:border-green-500";

  return "focus:ring-amber-400 focus:border-amber-400 dark:focus:ring-amber-500 dark:focus:border-amber-500";
};
