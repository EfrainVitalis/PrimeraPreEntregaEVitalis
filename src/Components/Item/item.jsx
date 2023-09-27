import { useNavigate } from "react-router-dom";

const Item = ({ id, nombre, image, precio }) => {
  // const value = useContext(MiContext);
  // console.log(value);
  const navigate = useNavigate();
  return (
    <div>
      <h3>{nombre}</h3>
      <img src={image} style={{ width: 100 }} />
      <p>Precio: u$s {precio}</p>
      <button onClick={() => navigate(`/detail/${id}`)}>Ver detalle</button>
    </div>
  );
};
export default Item;
