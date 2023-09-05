import { useEffect, useState } from "react";
import { getLibros, getLibrosByCategoria } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [libros, setLibros] = useState([]);
  const { categoriaId } = useParams();
  useEffect(() => {
    const asyncFunction = categoriaId ? getLibrosByCategoria : getLibros;
    asyncFunction(categoriaId)
      .then((res) => {
        setLibros(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoriaId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList libros={libros} />
    </div>
  );
};
export default ItemListContainer;
