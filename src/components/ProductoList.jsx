import ProductoCard from './ProductoCard.jsx';

function ProductoList({ productos, carrito, onAgregar }) {
  return (
    <section className="grid">

      {productos.map((producto) => {

        const estaEnCarrito = carrito.some(
          (item) => item.id === producto.id
        );

        return (
          <ProductoCard
            key={producto.id}
            producto={producto}
            estaEnCarrito={estaEnCarrito}
            onAgregar={onAgregar}
          />
        );

      })}

    </section>
  );
}

export default ProductoList;