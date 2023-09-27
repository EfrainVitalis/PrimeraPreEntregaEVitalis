import carrito from "./assets/cart.svg";
import classes from "./CartWidget.module.css";
import { useCart } from "../../contex/CartContext";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useCart();
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/cart")}>
      <img className={classes.carrito} src={carrito} />
      {totalQuantity}
    </button>
  );
};
export default CartWidget;
