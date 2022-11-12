

import React from 'react';

import { StylesDiv } from '../../styles/DivStyles';
import { StylesInput } from '../../styles/FormStyles';
import { StyledImg } from '../../styles/ImgStylez';
import { StyledA } from '../../styles/FontsStyles';
const HeaderCustom = () => {
  return (
    <StylesDiv headerDiv>
      <StylesDiv buscadorDiv>
        <StyledImg logoImg src="../../src/assets/logo-blanco.png" />
        <StylesDiv lupaDiv>
          <label htmlFor="buscador">🔍︎</label>
          <StylesInput
            type="text"
            value="Buscar"
            name="buscador"
            buscadorInp
          ></StylesInput>
        </StylesDiv>
      </StylesDiv>
      <StylesDiv notifiDiv>
        <StylesDiv infoDiv>
          <div>🖂</div>
          <div>
            🕭<StyledA asteriscoA>*</StyledA>
          </div>
        </StylesDiv>
        <StylesDiv caseUsrDiv>
          <StylesDiv circleUsrDiv>
            <StyledImg userImg src="../../src/assets/user.png"></StyledImg>
          </StylesDiv>
        </StylesDiv>
      </StylesDiv>
    </StylesDiv>
  );
};

export default HeaderCustom;
