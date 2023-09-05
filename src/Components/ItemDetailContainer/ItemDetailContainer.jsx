import { useEffect, useState } from "react";
import { getLibrosById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [libro, setLibro] = useState(null);
  const { librosId } = useParams();
  useEffect(() => {
    getLibrosById(librosId)
      .then((res) => {
        setLibro(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [librosId]);
  return (
    <div>
      <h1>Detalle del libro</h1>
      <ItemDetail {...libro} />
    </div>
  );
};

export default ItemDetailContainer;
