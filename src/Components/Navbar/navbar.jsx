import CartWidget from "../CartWidget/CartWidget";
import MiLogo from "../MiLogo/MiLogo";

const Navbar = () => {
  return (
    <nav>
      <MiLogo />
      <section>
        <button>Inicio</button>
        <button>Libros</button>
        <button>Contacto</button>
      </section>
      <CartWidget />
    </nav>
  );
};
export default Navbar;
