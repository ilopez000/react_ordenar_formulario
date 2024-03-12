import React, { useState } from 'react';
import './styles.css';

function ListaNombres() {
  const [nombres, setNombres] = useState(['Ana', 'Fernando', 'Maria', 'Jorge', 'Beatriz']);
  const [orden, setOrden] = useState('asc'); // 'asc' para ascendente, 'desc' para descendente

  const ordenarNombres = () => {
    const nombresOrdenados = [...nombres].sort((a, b) => {
      if (orden === 'asc') {
        return a.localeCompare(b);
      } else {
        return b.localeCompare(a);
      }
    });

    setNombres(nombresOrdenados);
    // Cambia el orden para la próxima vez que se haga clic
    setOrden(orden === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div>
      <button onClick={ordenarNombres}>Ordenar Nombres</button>
      <ul>
        {nombres.map((nombre, index) => (
          <li key={index}>{nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaNombres;
