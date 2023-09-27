import "./App.css";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contex/CartContext";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";

const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={"Todos los Libros"} />}
            />
            <Route
              path="/categoria/:categoriaId"
              element={<ItemListContainer greeting={"Categorias"} />}
            />
            <Route path="/detail/:librosId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
};

export default App;
