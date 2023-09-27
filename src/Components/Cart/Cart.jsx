import { useCart } from "../../contex/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, total } = useCart();
  return (
    <>
      <h1>Carrito</h1>
      <section>
        {cart.map((libro) => {
          return (
            <div key={libro.id}>
              <h1>{libro.nombre}</h1>
              <button onClick={() => removeItem(libro.id)}>Eliminar</button>
            </div>
          );
        })}
      </section>
      <br />
      <h2>Total: u$s{total}</h2>
      <Link to="/checkout">Checkout</Link>
    </>
  );
};
export default Cart;
