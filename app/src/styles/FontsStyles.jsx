import styled, { css } from 'styled-components';

export const StyledH2 = styled.h2`
  ${({ navH2 }) => {
    if (navH2) {
      return css`
        display: flex;
        gap: 0.4rem;
        align-items: center;
        font-family: Poppins;
        font-size: 15px;
        font-weight: lighter;
      `;
    }
  }}
  ${({ navH2S }) => {
    if (navH2S) {
      return css`
        display: flex;
        gap: 0.4rem;
        align-items: center;
        font-family: Poppins;
        font-size: 15px;
      `;
    }
  }}
`;

export const StyledA = styled.a`
  ${({ navA }) => {
    if (navA) {
      return css`
        text-decoration: none;
        color: #dbdbdb;
      `;
    }
  }}

  ${({ navASub }) => {
    if (navASub) {
      return css`
        color: black;
        font-size: 14px;
        font-weight: lighter;
      `;
    }
  }}

${({ navASubS }) => {
    if (navASubS) {
      return css`
        color: #0abb87;
      `;
    }
  }}
  ${({ asteriscoA }) => {
    if (asteriscoA) {
      return css`
        text-decoration: none;
        color: red;
      `;
    }
  }}

${({ olviA }) => {
    if (olviA) {
      return css`
        color: #9e9e9e;
      `;
    }
  }}
`;
