import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 13px;
  display: flex;

  ${({ greenBtn }) => {
    if (greenBtn) {
      return css`
        background-color: #0abb87;
        width: 175px;
        height: 50px;
        border: 1px solid #0abb87;
        color: aliceblue;
        display: flex;
        gap: 1rem;
      `;
    }
  }}
  ${({ blackBtn }) => {
    if (blackBtn) {
      return css`
        background-color: #262d34;
        border-radius: 8px;
        width: 151px;
        height: 32px;
        color: #ffffff;
        box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
        border-radius: 8px;
        color: #dbdbdb;
        border: none;
      `;
    }
  }}
  ${({ closeBtn }) => {
    if (closeBtn) {
      return css`
        font-size: 17px;
        background: #ffffff;
        border-radius: 10px;
        border: 1px solid #cfcece;
        padding: 0px 15px;
        height: 32px;
      `;
    }
  }}
  ${({ popNavBtnS }) => {
    if (popNavBtnS) {
      return css`
        background-color: #ffffff;
        border: 0;
        font-family: MontserratBold;
        border-bottom: #0abb87 4px solid;
      `;
    }
  }}
   ${({ popNavBtnN }) => {
    if (popNavBtnN) {
      return css`
        background-color: #ffffff;
        border: 0;
        font-family: MontserratBold;
      `;
    }
  }}
  ${({ navBtnXL }) => {
    if (navBtnXL) {
      return css`
        width: 180px;
        height: 50px;
        background-color: #ffffff;
        border: 0px;
        font-size: 11px;
        line-height: 22px;
        display: flex;
        justify-content: start;
        padding-left: 1rem;
        color: black;
      `;
    }
  }}

${({ tablaBtn }) => {
    if (tablaBtn) {
      return css`
        border: 0;
        background-color: transparent;
        width: 60px;
        height: 24px;
      `;
    }
  }}
`;
