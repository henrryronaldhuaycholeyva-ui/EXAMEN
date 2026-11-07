const URL_PRODUCTOS = 'https://dummyjson.com/products?limit=12';

async function fetchProductos() {
  const respuesta = await fetch(URL_PRODUCTOS);

  if (!respuesta.ok) {
    throw new Error('No se pudieron cargar los productos.');
  }

  const datos = await respuesta.json();

  return datos.products;
}

export default fetchProductos;