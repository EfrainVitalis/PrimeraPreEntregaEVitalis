import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [libro, setLibro] = useState(null);
  const [loading, setLoading] = useState(true);
  const { librosId } = useParams();
  useEffect(() => {
    setLoading(true);
    const librosRef = doc(db, "libros", librosId);

    getDoc(librosRef)
      .then((documentSnapshot) => {
        const fields = documentSnapshot.data();
        const librosAdapted = { id: documentSnapshot.id, ...fields };
        setLibro(librosAdapted);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [librosId]);

  if (loading) {
    return <h1>Cargando Libro</h1>;
  }

  return (
    <main>
      <h1>Detalle del producto</h1>
      <ItemDetail {...libro} />
    </main>
  );
};

export default ItemDetailContainer;
