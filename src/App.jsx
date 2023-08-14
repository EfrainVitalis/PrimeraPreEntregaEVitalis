import "./App.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a mi Ecommerce 😉" />
    </>
  );
}

export default App;
