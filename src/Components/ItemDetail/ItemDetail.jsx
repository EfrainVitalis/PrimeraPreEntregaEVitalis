import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../contex/CartContext";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ id, nombre, precio, descripcion, image, stock }) => {
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useCart();
  const navigate = useNavigate();

  const handleOnAdd = (quantity) => {
    const objLibrosToadd = {
      id,
      nombre,
      precio,
      quantity,
    };
    addItem(objLibrosToadd);
    console.log("agregue al carrito:", quantity);
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
        <button onClick={() => navigate("/Cart")}>Finalizar compra</button>
      )}
    </div>
  );
};
export default ItemDetail;
