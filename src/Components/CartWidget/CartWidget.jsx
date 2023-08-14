import carrito from "./assets/cart.svg";
import classes from "./CartWidget.module.css";
const CartWidget = () => {
  return (
    <button>
      <img className={classes.carrito} src={carrito} />0
    </button>
  );
};
export default CartWidget;
