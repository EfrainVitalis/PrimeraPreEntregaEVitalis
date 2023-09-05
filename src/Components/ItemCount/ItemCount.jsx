import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <h4>1</h4>
      <button>-</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
      <button>+</button>
    </div>
  );
};
export default ItemCount;
