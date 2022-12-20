import { useState } from "react";
import { Reorder } from "framer-motion";

const TodoList = () => {
  const [items, setItems] = useState([0, 1, 2, 3]);

  return (
    <Reorder.Group values={items} onReorder={setItems}>
      {items.map((item, i) => (
        <Reorder.Item key={i} value={item}>
          {item}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default TodoList;
