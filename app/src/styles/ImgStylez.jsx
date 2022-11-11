import styled, { css } from 'styled-components';

export const StyledImg = styled.img`
  ${({ navImg }) => {
    if (navImg) {
      return css`
       width: 30px;
      `;
    }
  }}
`;