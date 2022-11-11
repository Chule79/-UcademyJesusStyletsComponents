import './Nav.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

import { StyledButton } from '../../styles/ButtonsStyles';
import { StyledA, StyledH2 } from '../../styles/FontsStyles';
import { StyledImg } from '../../styles/ImgStylez';
const Navi = () => {
  return (
    <nav className="navLateral">
      <div className="navFuncional">
        <StyledA navA>
          <StyledButton navBtnXL>
            <StyledH2 navH2>
              <StyledImg
                navImg
                src="https://www.svgrepo.com/show/425893/graph1.svg"
              ></StyledImg>
              Dashboard
            </StyledH2>
          </StyledButton>
        </StyledA>
        <StyledA navA>
          <StyledButton navBtnXL>
            <StyledH2 navH2S>
              <StyledImg
                navImg
                src="https://www.svgrepo.com/show/95019/graduate-cap.svg"
              ></StyledImg>
              Mi Academia
            </StyledH2>
          </StyledButton>
        </StyledA>
        <div className="miniNav">
          <nav className="subNavi">
            <StyledA navASub>Editar Academia</StyledA>
            <StyledA navASubS>Estudiantes</StyledA>
            <StyledA navASub>Pofesores</StyledA>
          </nav>
        </div>

        <StyledA navA>
          <StyledButton navBtnXL>
            <StyledH2 navH2>
              <StyledImg
                navImg
                src="https://www.svgrepo.com/show/66922/book-cover.svg"
              ></StyledImg>
              Cursos
            </StyledH2>
          </StyledButton>
        </StyledA>
      </div>
      <StyledButton navBtnXL>
        <StyledH2 navH2>
          <StyledImg
            navImg
            src="https://www.svgrepo.com/show/428362/settings.svg"
          ></StyledImg>
          Ajustes
        </StyledH2>
      </StyledButton>
    </nav>
  );
};

export default Navi;
