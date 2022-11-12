import React, { useEffect, useState } from 'react';

import { getData } from '../../api/api';
import { StyleTd, StyleTr } from '../../styles/TableStyle';
import { PopCreate } from '../PopUpAlumno/Popup/Popup';

const RowT = () => {
  const [usuario, setUsuario] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getData("alumnos");
      setUsuario(data);
    })();
  }, []);

  return (
    <>
      {usuario.length ? (
        usuario.map((item) => (
          <StyleTr trDatos key={item.id}>
            <StyleTd tdTable>
              <button>{item.state}</button>
            </StyleTd>
            <StyleTd tdTable>{item.surname}</StyleTd>
            <StyleTd tdTable>{item.name}</StyleTd>
            <StyleTd tdTable>{item.email}</StyleTd>
            <StyleTd tdTable>{item.movil}</StyleTd>
            <StyleTd tdTable>
              <PopCreate item={item} />
            </StyleTd>
          </StyleTr>
        ))
      ) : (
        <p>Loading ...</p>
      )}
    </>
  );
};

export default RowT;
