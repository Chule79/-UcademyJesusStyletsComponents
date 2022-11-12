import styled, { css } from 'styled-components';

export const StylesDiv = styled.div`
  ${({ headerDiv }) => {
    if (headerDiv) {
      return css`
        width: 100%;
        height: 97px;
        background: #262d34;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        padding: 0rem 2rem;
      `;
    }
  }}
  ${({ lupaDiv }) => {
    if (lupaDiv) {
      return css`
        color: aliceblue;
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
      `;
    }
  }}
  ${({ buscadorDiv }) => {
    if (buscadorDiv) {
      return css`
        display: flex;
        flex-wrap: wrap;
        height: 100%;
        gap: 4rem;
        align-content: center;
        font-size: 20px;
      `;
    }
  }}
   ${({ notifiDiv }) => {
    if (notifiDiv) {
      return css`
        display: flex;
        flex-wrap: wrap;
        color: aliceblue;
        font-size: 23px;
        height: 100%;
        align-content: center;
      `;
    }
  }}
  ${({ infoDiv }) => {
    if (infoDiv) {
      return css`
        display: flex;
        flex-wrap: wrap;
        border-right: 2px solid aliceblue;
        gap: 1rem;
        padding: 0.4rem 2rem;
        align-content: center;
        align-self: center;
      `;
    }
  }}
  ${({ caseUsrDiv }) => {
    if (caseUsrDiv) {
      return css`
        padding: 1rem;
      `;
    }
  }}
  ${({ circleUsrDiv }) => {
    if (circleUsrDiv) {
      return css`
        border: 2px solid aliceblue;
        border-radius: 80%;
        padding: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
      `;
    }
  }}

${({ tablonDiv }) => {
    if (tablonDiv) {
      return css`
        width: 81%;
        padding: 2rem 0rem;
        height: 89vh;
        font-family: Poppins;
        align-content: flex-start;
      `;
    }
  }}
`;
