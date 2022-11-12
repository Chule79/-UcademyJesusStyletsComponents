import React from 'react';

import { StylesDiv } from '../../styles/DivStyles';
import { StyleTable, StyleTh, StyleTr } from '../../styles/TableStyle';
import { PopRegister } from '../PopUpRegistro/PopupR';
import RowT from './RowT';

function Tabla() {
  return (
    <StylesDiv tablonDiv>
      <PopRegister />
      <StyleTable tableG>
        <StyleTr trTitl>
          <StyleTh thTable>Conexión</StyleTh>
          <StyleTh thTable>Nombre y apellidos</StyleTh>
          <StyleTh thTable>Nombre de usuario</StyleTh>
          <StyleTh thTable>Email</StyleTh>
          <StyleTh thTable>Móvil</StyleTh>
        </StyleTr>
        <RowT />
      </StyleTable>
    </StylesDiv>
  );
}

export default Tabla;
