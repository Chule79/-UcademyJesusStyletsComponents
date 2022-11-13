import './Popup.css';

import React, { useState } from 'react';
import Popup from 'reactjs-popup';

import DatosPop from '../BodyPop/DatosPop';
import { StyledButton } from '../../../styles/ButtonsStyles';
import { StyledImg } from '../../../styles/ImgStylez';
import { StylesDiv } from '../../../styles/DivStyles';

export const PopCreate = ({ item }) => {
  return (
    <Popup
      trigger={
        <StyledButton tablaBtn key={item.id}>
          <StyledImg btnImg src="https://www.svgrepo.com/show/137539/information.svg"></StyledImg>
        </StyledButton>
      }
      modal
    >
      {(close) => (
        <StylesDiv opacityDiv>
          <StylesDiv popRDiv>
            <DatosPop item={item} />
            <StylesDiv closePopDiv>
              <StyledButton closeBtn onClick={close}>
                Cerar
              </StyledButton>
            </StylesDiv>
          </StylesDiv>
        </StylesDiv>
      )}
    </Popup>
  );
};
