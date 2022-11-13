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
  ${({ formInp }) => {
    if (formInp) {
      return css`
        height: 40px;
        background: #ffffff;
        border: 1px solid #dbdbdb;
        border-radius: 8px;
        width: 400px;
      `;
    }
  }}
  ${({ movilInp }) => {
    if (movilInp) {
      return css`
        height: 40px;
        background: #ffffff;
        border: 1px solid #dbdbdb;
        border-radius: 8px;
        width: 200px;
      `;
    }
  }}
`;

export const StylesForm = styled.form`
  ${({ inicForm }) => {
    if (inicForm) {
      return css`
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
      `;
    }
  }}

${({ editForm }) => {
    if (editForm) {
      return css`
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        flex-direction: column;
        width: 100%;
        height: 90%;
      `;
    }
  }}
`;

export const StylesSelect = styled.select`
  ${({ stateSelect }) => {
    if (stateSelect) {
      return css`
        height: 40px;
        border-radius: 18px;
        width: 100%;
      `;
    }
  }}
`;