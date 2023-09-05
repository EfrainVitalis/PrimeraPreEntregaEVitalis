const libros = [
  {
    id: "1",
    nombre: "El conejo y sus amigos",
    descripcion: "Descubro y me sorprendo. El conejo y sus amigos",
    precio: 55,
    categoria: "Infantiles",
    stock: "7",
    image:
      "https://www.bookshop.com.uy/media/catalog/product/cache/53c38e0c7a2c0ce2aff344af94a67178/d/e/descubro-y-me-sorprendo-el-conejo-y-sus-amigos.jpg",
  },
  {
    id: "2",
    nombre: "Jefa de tu vida ",
    descripcion:
      "Charuca nos trae un plan para convertirnos en nuestras propias jefas",
    precio: 63,
    categoria: "Ficcion",
    stock: "4",
    image:
      "https://www.bookshop.com.uy/media/catalog/product/cache/53c38e0c7a2c0ce2aff344af94a67178/j/e/jefa-de-tu-vida_1.jpg",
  },

  {
    id: "3",
    nombre: "El lobo",
    descripcion:
      "El esperado regreso del autor del best seller internacional Viajo sola con una impactante precuela protagonizada por los inspectores Krüger y Munch.",
    precio: 57,
    categoria: "Ficcion",
    stock: "8",
    image:
      "https://www.bookshop.com.uy/media/catalog/product/cache/53c38e0c7a2c0ce2aff344af94a67178/e/l/el-lobo.jpg",
  },
  {
    id: "4",
    nombre: "Locos por el asado",
    descripcion: "Las mejores recetas sobre la parrilla",
    precio: 48,
    categoria: "Gastronomia",
    stock: "7",
    image:
      "https://www.bookshop.com.uy/media/catalog/product/cache/e8eaeee068b3de778eca36e04d14ecc2/9/7/9789500754347.jpg",
  },
];
export const getLibros = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(libros);
    }, 1000);
  });
};

export const getLibrosById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(libros.find((libros) => libros.id == id));
    }, 500);
  });
};

export const getLibrosByCategoria = (categoriaId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(libros.filter((libros) => libros.categoria == categoriaId));
    }, 500);
  });
};
