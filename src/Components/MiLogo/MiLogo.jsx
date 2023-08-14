import logo from "./assets/Logo.jpg";
import classes from "./MiLogo.module.css";
const MiLogo = () => {
  return (
    <div>
      <img className={classes.logo} src={logo} />
    </div>
  );
};
export default MiLogo;
