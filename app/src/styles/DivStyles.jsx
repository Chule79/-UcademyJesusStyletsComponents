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

${({ inicDiv }) => {
    if (inicDiv) {
      return css`
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        width: 500px;
        height: 500px;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        align-self: center;
        font-family: Montserrat;
      `;
    }
  }}

  
${({ campoDiv }) => {
    if (campoDiv) {
      return css`
        line-height: 22px;
        font-weight: 500;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        gap: 0.5rem;
      `;
    }
  }}

${({ incOptiDiv }) => {
    if (incOptiDiv) {
      return css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 400px;
      `;
    }
  }}
  ${({ rememDiv }) => {
    if (rememDiv) {
      return css`
        display: flex;
        gap: 1rem;
      `;
    }
  }}

  ${({ opacityDiv }) => {
    if (opacityDiv) {
      return css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.3);
      `;
    }
  }}

${({ popRDiv }) => {
    if (popRDiv) {
      return css`
        background-color: #ffffff;
        width: 480px;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        border: 1px solid black;
        border-radius: 8px;
        height: 611px;
      `;
    }
  }}

${({ campoDobleDiv }) => {
    if (campoDobleDiv) {
      return css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 90%;
        gap: 2rem;
      `;
    }
  }}

${({ headerPopDiv }) => {
    if (headerPopDiv) {
      return css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
      `;
    }
  }}
  ${({ closePopDiv }) => {
    if (closePopDiv) {
      return css`
        display: flex;
        justify-content: end;
        width: 90%;
      `;
    }
  }}

${({ cursoHeadPopDiv }) => {
    if (cursoHeadPopDiv) {
      return css`
        display: flex;
        gap: 1rem;
      `;
    }
  }}

${({ cuerpoPopDiv }) => {
    if (cuerpoPopDiv) {
      return css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        overflow: scroll;
      `;
    }
  }}

${({ cuerpoFormDiv }) => {
    if (cuerpoFormDiv) {
      return css`
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-self: center;
        justify-self: center;
        font-family: Montserrat;
        font-size: 11px;
      `;
    }
  }}
  ${({ campoSurnameDiv }) => {
    if (campoSurnameDiv) {
      return css`
        display: flex;
        flex-direction: column;
        gap: 3px;
        width: 50%;
      `;
    }
  }}

${({ circleImgDiv }) => {
    if (circleImgDiv) {
      return css`
        border: 0.5px solid black;
        border-radius: 80%;
        padding: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
      `;
    }
  }}
`;
