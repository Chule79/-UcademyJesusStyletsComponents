import axios from 'axios';
import React, { useState } from 'react';

import { StyledButton } from '../../../styles/ButtonsStyles';
import { StylesDiv } from '../../../styles/DivStyles';
import { StyledP } from '../../../styles/FontsStyles';
import { StylesForm, StylesInput } from '../../../styles/FormStyles';
import { StyledImg } from '../../../styles/ImgStylez';
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
            <StyledImg
              mountainImg
              src="https://www.svgrepo.com/show/71408/image.svg"
            ></StyledImg>
          </StylesDiv>
          <StylesDiv todoDatoDiv>
            <StylesDiv namesDiv>
              <StyledImg btnImg src="https://www.svgrepo.com/show/20/user.svg"></StyledImg>
              <div>
                <StylesDiv nameDiv>
                  <StyledP titlP>Nombre y apellidos</StyledP>
                  <StyledP normalP>{item.surname}</StyledP>
                </StylesDiv>
                <div>
                  <StyledP titlP>Nombre de usuario</StyledP>
                  <StyledP normalP>{item.name}</StyledP>
                </div>
              </div>
            </StylesDiv>
            <StylesDiv namesDiv>
            <StyledImg btnImg src="https://www.svgrepo.com/show/17588/mail.svg"></StyledImg>
              <div>
                <StyledP titlP>Email</StyledP>
                <StyledP normalP>{item.email}</StyledP>
              </div>
            </StylesDiv>
            <StylesDiv namesDiv>
            <StyledImg btnImg src="https://www.svgrepo.com/show/27964/phone.svg"></StyledImg>
              <div>
                <StyledP titlP>Movil</StyledP>
                <StyledP normalP>{item.movil}</StyledP>
              </div>
            </StylesDiv>
            <StylesDiv fechaDiv>
            <StyledImg btnImg src="https://www.svgrepo.com/show/378116/date.svg"></StyledImg>
              <div>
                <StyledP titlP>Fecha de inscripción</StyledP>
                <StyledP normalP>{item.date}</StyledP>
              </div>
            </StylesDiv>
          </StylesDiv>
        </StylesDiv>
      </>
    );
  }
  if (variant == 'edit') {
    return (
      <>
        <StylesForm editForm onSubmit={(ev) => createAlumn(ev)}>
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
