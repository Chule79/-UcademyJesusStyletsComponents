import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';

import { StylesDiv } from '../../../styles/DivStyles.jsx';
import { StyledH2 } from '../../../styles/FontsStyles.jsx';
const CursoPop = () => {
  const [curso, setCurso] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await axios.get('http://localhost:8080/cursos');
      setCurso(data.data);
    })();
  }, []);
  console.log(curso);
  return (
    <>
      {curso.length ? (
        curso.map((item) => (
          <StylesDiv cursosDiv key={item.id}>
            <StyledH2 navH2S>{item.name}</StyledH2>
            <StylesDiv barraDiv>
              <progress id="file" max="100" value={item.value} />
              <p>{item.value}%</p>
            </StylesDiv>

            <p>Fecha de inscripción: {item.date}</p>
          </StylesDiv>
        ))
      ) : (
        <p>Loading ...</p>
      )}
    </>
  );
};

export default CursoPop;
