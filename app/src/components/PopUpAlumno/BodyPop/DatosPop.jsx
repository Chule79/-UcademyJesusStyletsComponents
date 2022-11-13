import axios from 'axios';
import React, { useState } from 'react';

import { StyledButton } from '../../../styles/ButtonsStyles';
import { StylesDiv } from '../../../styles/DivStyles';
import { StylesForm, StylesInput } from '../../../styles/FormStyles';
import CursoPop from './CursoPop';

const DatosPop = ({ item }) => {
  const [variant, setVariant] = useState('datos');
  const [name, setName] = useState(item.name);

  const [surname, setSurname] = useState(item.surname);
  const [surname2, setSurname2] = useState('');
  const [email, setEmail] = useState(item.email);
  const [movil, setMovil] = useState(item.movil);

  const createAlumn = (ev) => {
    const alumn = {
      ...item,
      name: name,
      surname: `${surname} ${surname2} `,
      email: email,
      movil: movil,
    };

    postAlumn(alumn);
  };

  const postAlumn = async (item) => {
    console.log(item);
    axios({
      method: 'put',
      url: `http://localhost:8080/alumnos/${item.id}`,
      data: item,
    });
  };
  if (variant == 'datos') {
    return (
      <>
        <StylesDiv headerPopDiv>
        <StylesDiv cursoHeadPopDiv>
            <StyledButton popNavBtnS>Perfil</StyledButton>
            <StyledButton popNavBtnN onClick={(ev) => setVariant('curso')}>
              Cursos
            </StyledButton>
          </StylesDiv>
          <StyledButton blackBtn onClick={(ev) => setVariant('edit')}>
            Editar estudiante
          </StyledButton>
        </StylesDiv>
        <StylesDiv cuerpoPopDiv>
          <StylesDiv circleImgDiv>
            <img
              src="https://www.svgrepo.com/show/71408/image.svg"
              className="mountainImg"
            ></img>
          </StylesDiv>
          <div className="todoDatos">
            <div className="nombres">
              <img src="https://www.svgrepo.com/show/20/user.svg"></img>
              <div className="textNombres">
                <div className="cajaNom">
                  <p className="tituloDato">Nombre y apellidos</p>
                  <p className="datoApi">{item.surname}</p>
                </div>
                <div>
                  <p className="tituloDato">Nombre de usuario</p>
                  <p className="datoApi">{item.name}</p>
                </div>
              </div>{' '}
            </div>
            <div className="nombres">
              <img src="https://www.svgrepo.com/show/17588/mail.svg"></img>
              <div>
                <p className="tituloDato">Email</p>
                <p className="datoApi">{item.email}</p>
              </div>
            </div>
            <div className="nombres">
              <img src="https://www.svgrepo.com/show/27964/phone.svg"></img>
              <div>
                <p className="tituloDato">Movil</p>
                <p className="datoApi">{item.movil}</p>
              </div>
            </div>
            <div className="fecha">
              <img src="https://www.svgrepo.com/show/378116/date.svg"></img>
              <div>
                <p className="tituloDato">Fecha de inscripción</p>
                <p className="datoApi">{item.date}</p>
              </div>
            </div>
          </div>
        </StylesDiv>
      </>
    );
  }
  if (variant == 'edit') {
    return (
      <>
        <StylesForm inicForm onSubmit={(ev) => createAlumn(ev)}>
          <StylesDiv headerPopDiv>
          <StylesDiv cursoHeadPopDiv>
              <StyledButton popNavBtnS>Perfil</StyledButton>
              <StyledButton popNavBtnN onClick={(ev) => setVariant('curso')}>
                Cursos
              </StyledButton>
            </StylesDiv>
            <StylesDiv cursoHeadPopDiv>
              <StyledButton closeBtn onClick={(ev) => setVariant('datos')}>
                Cancelar edición
              </StyledButton>         
              <StyledButton blackBtn type="submit">
                Guardar
              </StyledButton>
            </StylesDiv>
          </StylesDiv>
          <StylesDiv cuerpoFormDiv>
            <StylesDiv campoDobleDiv>
              <StylesDiv campoSurnameDiv>
                <label htmlFor="username">Nombre:</label>
                <StylesInput
                  movilInp
                  type="text"
                  name="username"
                  id="username"
                  onChange={(ev) => setSurname(ev.target.value)}
                />
              </StylesDiv>
              <StylesDiv campoSurnameDiv>
                <label htmlFor="username">Apellidos:</label>
                <StylesInput
                  movilInp
                  type="text"
                  name="username"
                  id="username"
                  onChange={(ev) => setSurname2(ev.target.value)}
                />
              </StylesDiv>
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
            <StylesDiv campoDiv>
              <label htmlFor="movil">Movil:</label>
              <StylesInput
                  formInp
                type="number"
                name="movil"
                id="movil"
                onChange={(ev) => setMovil(ev.target.value)}
              />
            </StylesDiv>
          </StylesDiv>
        </StylesForm>
      </>
    );
  }
  if (variant == 'curso') {
    return (
      <>
        <StylesDiv headerPopDiv>
          <StylesDiv cursoHeadPopDiv>
            <StyledButton popNavBtnN onClick={(ev) => setVariant('datos')}>
              Perfil
            </StyledButton>
            <StyledButton popNavBtnS>Cursos</StyledButton>
          </StylesDiv>
        </StylesDiv>
        <StylesDiv cuerpoPopDiv>
          <CursoPop />
        </StylesDiv>
      </>
    );
  }
};

export default DatosPop;
