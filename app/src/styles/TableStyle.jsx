import styled, { css } from 'styled-components';


export const StyleTable = styled.table`
${({ tableG }) => {
    if (tableG) {
      return css`
        width: 100%;
      `;
    }
  }}
`

export const StyleTr = styled.tr`
${({ trTitl }) => {
    if (trTitl) {
      return css`
        font-family: 'Poppins';
    width: 100%;
    border-bottom: 3px solid black;
    display: flex;
      `;
    }
  }}
`