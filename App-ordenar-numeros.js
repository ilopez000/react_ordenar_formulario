import React, { useState } from 'react';
import './styles.css';

function ListaNombres() {
  const [nombres, setNombres] = useState(['500', '7', '2', '4', '6']);
  const [orden, setOrden] = useState('asc'); // 'asc' para ascendente, 'desc' para descendente

  const ordenarNombres = () => {
    const nombresOrdenados = [...nombres].sort((a, b) => {
      if (orden === 'asc') {
        return a-b;
      } else {
        return b-a;
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
