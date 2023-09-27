import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();
  useEffect(() => {
    setLoading(true);
    const librosRef = !categoriaId
      ? collection(db, "libros")
      : query(collection(db, "libros"), where("categoria", "==", categoriaId));

    getDocs(librosRef)
      .then((querySnapshot) => {
        const librosAdapted = querySnapshot.docs.map((doc) => {
          const fields = doc.data();
          return { id: doc.id, ...fields };
        });
        setLibros(librosAdapted);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
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
