import { useState } from "react";

const Formulario = ({ createOrden, onconfirm }) => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      nombre,
      telefono,
      email,
    };

    onconfirm(userData);
  };
  return (
    <div>
      <form onSubmit={handleConfirm}>
        <label>Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={({ target }) => setNombre(target.value)}
          placeholder="Escribe tu nombre Aqui"
        />
        <label>Telefono</label>
        <input
          type="number"
          value={telefono}
          onChange={({ target }) => setTelefono(target.value)}
          min={0}
          placeholder="Escribe tu numero de Telefono"
        />
        <label>E-mail</label>
        <input
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
          placeholder="Escribe tu E-mail Aqui"
        />
        <button onClick={createOrden}>Generar Orden</button>
      </form>
    </div>
  );
};

export default Formulario;
