import React, { useState } from 'react';
import './styles.css';


function TablaOrdenable() {
  const [datos, setDatos] = useState({
    columna1: [3.1, 2.4, 5.6, 4.2, 1.8, 6.9, 7.3],
    columna2: [7.4, 6.1, 5.2, 3.9, 2.3, 1.7, 4.8]
  });

  const ordenarColumna = (columna) => {
    const datosOrdenados = [...datos[columna]].sort((a, b) => a - b);
    const esDescendente = JSON.stringify(datos[columna]) === JSON.stringify(datosOrdenados);
    setDatos({
      ...datos,
      [columna]: esDescendente ? datosOrdenados.reverse() : datosOrdenados
    });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              Columna 1
              <button onClick={() => ordenarColumna('columna1')}>Ordenar</button>
            </th>
            <th>
              Columna 2
              <button onClick={() => ordenarColumna('columna2')}>Ordenar</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {datos.columna1.map((item, index) => (
            <tr key={index}>
              <td>{datos.columna1[index]}</td>
              <td>{datos.columna2[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaOrdenable;
