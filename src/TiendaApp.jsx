import { useState } from 'react';

import ProductoList from './components/ProductoList.jsx';
import CarritoPanel from './components/CarritoPanel.jsx';

import useProductos from './hooks/useProductos.js';

function TiendaApp() {

  const { productos, cargando, error } = useProductos();

  const [carrito, setCarrito] = useState([]);

  function agregarProducto(producto) {

    const existe = carrito.some(
      (item) => item.id === producto.id
    );

    if (!existe) {
      setCarrito([...carrito, producto]);
    }

  }

  function quitarProducto(id) {

    setCarrito(
      carrito.filter((producto) => producto.id !== id)
    );

  }

  function vaciarCarrito() {

    setCarrito([]);

  }

  const total = carrito.reduce((acumulado, producto) => {
    return acumulado + producto.price;
  }, 0);

  return (

    <main>

      <h1>Mini Tienda</h1>

      <div className="layout">

        {cargando && (
          <p className="mensaje">Cargando...</p>
        )}

        {error && (
          <p className="mensaje error">{error}</p>
        )}

        {!cargando && !error && (

          <>

            <ProductoList
              productos={productos}
              carrito={carrito}
              onAgregar={agregarProducto}
            />

            <CarritoPanel
              carrito={carrito}
              total={total}
              onQuitar={quitarProducto}
              onVaciar={vaciarCarrito}
            />

          </>

        )}

      </div>

    </main>

  );

}

export default TiendaApp;