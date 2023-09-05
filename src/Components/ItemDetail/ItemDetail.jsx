import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ nombre, precio, descripcion, image, stock }) => {
  const [quantity, setQuantity] = useState(0);
  const handleOnAdd = (quantity) => {
    console.log("se agrego " + quantity);
    setQuantity(quantity);
  };
  return (
    <div>
      <h1>{nombre}</h1>
      <img src={image} style={{ width: 300 }} />
      <h3> u$s{precio}</h3>
      <h3>{descripcion}</h3>
      {quantity == 0 ? (
        <ItemCount stock={stock} onAdd={handleOnAdd} />
      ) : (
        <button>Finalizar compra</button>
      )}
    </div>
  );
};
export default ItemDetail;
