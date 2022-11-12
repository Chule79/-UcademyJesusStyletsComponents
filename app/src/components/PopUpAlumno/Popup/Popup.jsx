import './Popup.css';

import React, { useState } from 'react';
import Popup from 'reactjs-popup';

import DatosPop from '../BodyPop/DatosPop';
import { StyledButton } from '../../../styles/ButtonsStyles';
import { StyledImg } from '../../../styles/ImgStylez';

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
        <div className="modal">
          <div className="ticket">
            <DatosPop item={item} />
            <div className="divClose">
              <StyledButton closeBtn onClick={close}>
                Cerar
              </StyledButton>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};
