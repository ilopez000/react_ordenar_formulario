import React, { useState } from 'react';
import './styles.css';


function TablaOrdenable() {
  const [datos, setDatos] = useState({
    columna1: [3.1, 2.4, 5.6, 4.2, 1.8, 6.9, 7.3],
    columna2: [7.4, 6.1, 5.2, 3.9, 2.3, 1.7, 4.8],
    columna3: [4.4, 5.1, 15.2, 33.9, 2.3, 51.7, 4.8],
    columna4: [7.4, 16.1, 25.2, 33.9, 2.3, 61.7, 4.8]
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
            </th>
            <th>
              Columna 2
            </th>
            <th>
              Columna 3
            </th>
            <th>
              Columna 4
            </th>
          </tr>
        </thead>
        <tbody>
          {datos.columna1.map((item, index) => (
            <tr key={index}>
              <td onClick={() => ordenarColumna('columna1')}>{datos.columna1[index]}</td>
              <td onClick={() => ordenarColumna('columna2')}>{datos.columna2[index]}</td>
              <td onClick={() => ordenarColumna('columna3')}>{datos.columna3[index]}</td>
              <td onClick={() => ordenarColumna('columna4')}>{datos.columna4[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaOrdenable;
