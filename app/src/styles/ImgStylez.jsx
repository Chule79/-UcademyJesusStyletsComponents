import styled, { css } from 'styled-components';

export const StyledImg = styled.img`
  ${({ navImg }) => {
    if (navImg) {
      return css`
        width: 30px;
      `;
    }
  }}
  ${({ inicImg }) => {
    if (inicImg) {
      return css`
        width: 385.59px;
        height: 82.87px;
      `;
    }
  }}

  ${({ btnImg }) => {
    if (btnImg) {
      return css`
        width: 20px;
      `;
    }
  }}

${({ userImg }) => {
    if (userImg) {
      return css`
        width: 30px;
      `;
    }
  }}
  ${({ logoImg }) => {
    if (logoImg) {
      return css`
        height: 45px;
      `;
    }
  }}
  ${({ mountainImg }) => {
    if (mountainImg) {
      return css`
        width: 51px; 
      `;
    }
  }}
`;
