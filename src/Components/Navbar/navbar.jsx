import CartWidget from "../CartWidget/CartWidget";
import MiLogo from "../MiLogo/MiLogo";
import classes from "../Navbar/navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <MiLogo />

      <section className={classes.button}>
        <button onClick={() => navigate("/")}>Inicio</button>
        <button onClick={() => navigate("/categoria/Gastronomia")}>
          Gastronomia
        </button>
        <button onClick={() => navigate("/categoria/Ficcion")}>Ficcion</button>
        <button onClick={() => navigate("/categoria/Infantiles")}>
          Infantiles
        </button>
      </section>
      <CartWidget />
    </nav>
  );
};
export default Navbar;
