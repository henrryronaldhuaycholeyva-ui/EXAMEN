function CarritoPanel({ carrito, total, onQuitar, onVaciar }) {
  return (
    <aside className="carrito">

      <h3>Carrito ({carrito.length})</h3>

      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (

        <ul>
          {carrito.map((producto) => (

            <li key={producto.id}>

              <img src={producto.thumbnail} alt={producto.title} />

              <span>
                {producto.title} - $ {producto.price.toFixed(2)}
              </span>

              <button onClick={() => onQuitar(producto.id)}>
                Quitar
              </button>

            </li>

          ))}
        </ul>

      )}

      <p className="total">
        Total: $ {total.toFixed(2)}
      </p>

      <button
        onClick={onVaciar}
        disabled={carrito.length === 0}
      >
        Vaciar carrito
      </button>

    </aside>
  );
}

export default CarritoPanel;