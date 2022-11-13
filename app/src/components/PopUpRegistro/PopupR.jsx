import axios from 'axios';
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { v4 as uuidv4 } from 'uuid';

import { StyledButton } from '../../styles/ButtonsStyles';
import { StylesDiv } from '../../styles/DivStyles';
import { StylesForm, StylesInput, StylesSelect } from '../../styles/FormStyles';
import { StyledImg } from '../../styles/ImgStylez';
export const PopRegister = () => {
  const [name, setName] = useState('');
  const [state, setState] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [movil, setMovil] = useState(0);
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  const createAlumn = (ev) => {
    ev.preventDefault();
    const alumn = {
      id: uuidv4(),
      state: state,
      name: name,
      surname: surname,
      email: email,
      movil: movil,
      date: date,
    };
    postAlumn(alumn);
  };

  const postAlumn = async (item) => {
    console.log(item);
    axios({
      method: 'post',
      url: 'http://localhost:8080/alumnos',
      data: item,
    });
  };

  return (
    <Popup
      trigger={
        <StyledButton greenBtn>
          <StyledImg
            buttonImg
            src="https://www.svgrepo.com/show/391514/plus-circle-o.svg"
          ></StyledImg>
          Nuevo estudiante
        </StyledButton>
      }
      modal
    >
      {(close) => (
        <StylesDiv opacityDiv>
          <StylesDiv popRDiv>
            <StylesForm inicForm onSubmit={(ev) => createAlumn(ev)}>
              <StylesDiv campoDiv>
                <label htmlFor="username">Nombre y apellidos:</label>
                <StylesInput
                  formInp
                  type="text"
                  name="username"
                  id="username"
                  onChange={(ev) => setSurname(ev.target.value)}
                />
              </StylesDiv>
              <StylesDiv campoDiv>
                <label htmlFor="name">NickName: </label>
                <StylesInput
                  formInp
                  type="text"
                  name="name"
                  id="name"
                  onChange={(ev) => setName(ev.target.value)}
                />
              </StylesDiv>
              <StylesDiv campoDiv>
                <label htmlFor="email">Email:</label>
                <StylesInput
                  formInp
                  type="text"
                  name="email"
                  id="email"
                  onChange={(ev) => setEmail(ev.target.value)}
                />
              </StylesDiv>
              <StylesDiv campoDobleDiv>
                <StylesDiv campoDiv>
                  <label htmlFor="state">Estado:</label>
                  <StylesSelect
                    stateSelect
                    name="type"
                    id="type"
                    onChange={(ev) => setState(ev.target.value)}
                  >
                    <option value="Offline">Offline</option>
                    <option value="Online">Online</option>
                  </StylesSelect>
                </StylesDiv>
                <StylesDiv campoDiv>
                  <label htmlFor="movil">Movil:</label>
                  <StylesInput
                    movilInp
                    type="number"
                    name="movil"
                    id="movil"
                    onChange={(ev) => setMovil(ev.target.value)}
                  />
                </StylesDiv>
              </StylesDiv>
              <StyledButton blackBtn type="submit">
                Guardar
              </StyledButton>
            </StylesForm>
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
