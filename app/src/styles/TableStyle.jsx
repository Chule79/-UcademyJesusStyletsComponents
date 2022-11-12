import styled, { css } from 'styled-components';

export const StyleTable = styled.table`
  ${({ tableG }) => {
    if (tableG) {
      return css`
        width: 100%;
      `;
    }
  }}
`;

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
  ${({ trDatos }) => {
    if (trDatos) {
      return css`
        width: 100%;
        border-bottom: 1px solid black;
        display: flex;
      `;
    }
  }}
`;

export const StyleTd = styled.td`
  ${({ tdTable }) => {
    if (tdTable) {
      return css`
        font-family: 'Montserrat';
        width: 260px;
        overflow: scroll;
        text-align: center;
        padding: 20px 0rem 1rem 1rem;
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
      `;
    }
  }}
`;

export const StyleTh = styled.th`
  ${({ thTable }) => {
    if (thTable) {
      return css`
        font-family: 'Montserrat';
        width: 260px;
        overflow: scroll;
        text-align: center;
        padding: 20px 0rem 1rem 1rem;
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
      `;
    }
  }}
`;
