import React from 'react';

import { StyledButton } from '../../styles/ButtonsStyles';
import { StylesDiv } from '../../styles/DivStyles';
import { StyledA } from '../../styles/FontsStyles';
import { StylesForm, StylesInput } from '../../styles/FormStyles';
import { StyledImg } from '../../styles/ImgStylez';
function InicioPoster() {
  return (
    <StylesDiv inicDiv>
      <StyledImg inicImg src="../../src/assets/logo.png" />
      <StylesForm inicForm>
        <StylesDiv campoDiv>
          <label htmlFor="name">
            <StyledA asteriscoA>*</StyledA> Nombre de usuario:
          </label>
          <StylesInput formInp type="text" name="name" />
        </StylesDiv>
        <StylesDiv campoDiv>
          <label htmlFor="passw">
            <StyledA asteriscoA>*</StyledA> Contraseña:
          </label>
          <StylesInput formInp type="password" name="passw" id="password" />
        </StylesDiv>

        <StylesDiv incOptiDiv>
          <StylesDiv rememDiv>
            <input type="checkbox" name="remember" />
            <label htmlFor="remember">Remember me</label>
          </StylesDiv>
          <StyledA olviA>Olvidè Contraseña</StyledA>
        </StylesDiv>
        <StyledButton type="submit" blackBtn>
          <StyledA navA href="/estudiantes">
            Iniciar Sesión
          </StyledA>
        </StyledButton>
      </StylesForm>
    </StylesDiv>
  );
}

export default InicioPoster;
