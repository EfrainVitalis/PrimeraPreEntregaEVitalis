import Item from "../Item/item";

const ItemList = ({ libros }) => {
  return (
    <div>
      {libros.map((libros) => {
        return <Item key={libros.id} {...libros} />;
      })}
    </div>
  );
};
export default ItemList;
