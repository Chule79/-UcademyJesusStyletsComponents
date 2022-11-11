import './Popup.css';

import React, { useState } from 'react';
import Popup from 'reactjs-popup';

import DatosPop from '../BodyPop/DatosPop';
import { StyledButton } from '../../../styles/ButtonsStyles';

export const PopCreate = ({ item }) => {
  return (
    <Popup
      trigger={
        <button className="informacion" key={item.id}>
          <img src="https://www.svgrepo.com/show/137539/information.svg"></img>
        </button>
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
