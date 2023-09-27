import {
  addDoc,
  getDocs,
  collection,
  documentId,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import { useCart } from "../../contex/CartContext";
import { db } from "../../services/firebase/firebaseConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Formulario from "../Formulario/Formulario";
import swal from "sweetalert2";
import Swal from "sweetalert2";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();

  const createOrder = async ({ nombre, telefono, email }) => {
    try {
      setLoading(true);
      const objOrder = {
        buyer: {
          nombre,
          telefono,
          email,
        },
        items: cart,
        total,
      };
      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cart.map((prod) => prod.id);
      console.log(ids);
      const librosRef = query(
        collection(db, "libros"),
        where(documentId(), "in", ids)
      );
      const { docs } = await getDocs(librosRef);
      docs.forEach((doc) => {
        const fields = doc.data();
        const stockDb = fields.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;
        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...fields });
        }
      });

      if (outOfStock.length == 0) {
        const orderRef = collection(db, "order");
        const { id: orderId } = await addDoc(orderRef, objOrder);
        batch.commit();
        clearCart();
        navigate("/");

        const Toast = Swal.mixin({
          toast: true,
          position: "top-center",
          showConfirmButton: false,
          timer: 6000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Compra existosa su numero de orden es:" + "" + orderId,
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "hay producto fuera de stock...",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("ocurrio un error al obtener datos" + error.message);

      // console.log("el numero de su orden es:" + orderId);
      //   } else {
      //     console.error("Hay productos fuera de stock");
      //   }
      // } catch (error) {
      //   console.log("Ocurrio un error:" + error.message);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <h1>Cargando su orden...</h1>;
  }

  return (
    <>
      <h1>Checkout</h1>
      <Formulario onconfirm={createOrder} />
    </>
  );
};
export default Checkout;
