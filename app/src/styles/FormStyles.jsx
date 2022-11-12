import styled, { css } from 'styled-components';

export const StylesInput = styled.input`
  ${({ buscadorInp }) => {
    if (buscadorInp) {
      return css`
         background: transparent;
    color: aliceblue;
    border: 0;
    font-size: medium;
      `;
    }
  }}

`;
