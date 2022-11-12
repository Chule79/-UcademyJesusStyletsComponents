import './Tabla.css';

import React from 'react';

import { StyleTable, StyleTr } from '../../styles/TableStyle';
import { PopRegister } from '../PopUpRegistro/PopupR';
import RowT from './RowT';

function Tabla() {
  return (
    <div className="tablon">
      <PopRegister />
      <StyleTable tableG>
        <StyleTr trTitl>
          <th className="datos">Conexión</th>
          <th className="datos">Nombre y apellidos</th>
          <th className="datos">Nombre de usuario</th>
          <th className="datos">Email</th>
          <th className="datos">Móvil</th>
        </StyleTr>
        <RowT />
      </StyleTable>
    </div>
  );
}

export default Tabla;
