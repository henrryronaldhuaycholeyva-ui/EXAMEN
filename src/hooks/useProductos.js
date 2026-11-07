import { useEffect, useState } from 'react';
import fetchProductos from '../services/fetchProductos.js';

function useProductos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function cargarProductos() {
      try {
        setCargando(true);
        setError('');

        const datos = await fetchProductos();

        setProductos(datos);
      } catch (err) {
        setError('Error al cargar los productos. Revisa tu conexión a internet.');
      } finally {
        setCargando(false);
      }
    }

    cargarProductos();
  }, []);

  return { productos, cargando, error };
}

export default useProductos;