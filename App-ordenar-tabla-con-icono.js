import React, { useState } from 'react';
import './styles.css';

function TablaOrdenable() {
  // Estado inicial de los datos a mostrar en la tabla.
  const [datos, setDatos] = useState({
    columna1: [3.1, 2.4, 5.6, 4.2, 1.8, 6.9, 7.3],
    columna2: [7.4, 6.1, 5.2, 3.9, 2.3, 1.7, 4.8],
    columna3: [4.4, 5.1, 15.2, 33.9, 2.3, 51.7, 4.8],
    columna4: [7.4, 16.1, 25.2, 33.9, 2.3, 61.7, 4.8]
  });

  // Estado para rastrear el orden de clasificación de cada columna.
  const [orden, setOrden] = useState({
    columna1: 'asc',
    columna2: 'asc',
    columna3: 'asc',
    columna4: 'asc'
  });

  // Función para ordenar una columna específica.
  const ordenarColumna = (columna) => {
    const datosOrdenados = [...datos[columna]].sort((a, b) => {
      if (orden[columna] === 'asc') {
        return a - b; // Orden ascendente
      } else {
        return b - a; // Orden descendente
      }
    });

    // Actualizar los datos con la nueva ordenación.
    setDatos({
      ...datos,
      [columna]: datosOrdenados
    });

    // Cambiar el orden para la próxima clasificación.
    setOrden({
      ...orden,
      [columna]: orden[columna] === 'asc' ? 'desc' : 'asc'
    });
  };

  // Función para obtener el símbolo de flecha según el orden de la columna.
  const flechaColumna = (columna) => {
    return orden[columna] === 'asc' ? "▲" : "▼"; // ▼ para ascendente, ▲ para descendente
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {['Columna 1', 'Columna 2', 'Columna 3', 'Columna 4'].map((titulo, index) => (
              <th key={index} onClick={() => ordenarColumna(`columna${index + 1}`)}>
                {titulo} {flechaColumna(`columna${index + 1}`)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {datos.columna1.map((item, index) => (
            <tr key={index}>
              <td>{datos.columna1[index]}</td>
              <td>{datos.columna2[index]}</td>
              <td>{datos.columna3[index]}</td>
              <td>{datos.columna4[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaOrdenable;
