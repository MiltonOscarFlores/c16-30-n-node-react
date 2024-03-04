import { useState } from "react";
import styled from "styled-components";
import LogoImage from "../assets/images/Logo.svg";
import ConfigSvg from "../assets/images/Config.svg";
import ExitSvg from "../assets/images/Exit.svg";
import { Link } from "react-router-dom";

const MyNavbar = styled.div`
  background-color: #e9e5d6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1229px;
  height: 50px;
  margin: 0px 0px 15px 0px;
  padding: 0px 9.5em 0px 9.5em;
`;

const Logo = styled.img`
  width: 140px;
  height: 36px;
  cursor: pointer;
`;

const NavBtnFavoritos = styled.button`
  background: transparent;
  color: #464e2e;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 500;
  padding: 3px 20px;
  height: 30px;

  &:active {
    transform: translateY(1px);
    transition: background-color 1s, color 0.3s, transform 0.1s ease-in-out;
  }
`;

const NavBtnRecordatorios = styled.button`
  background: transparent;
  color: #424242;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  padding: 3px 20px;
  height: 30px;

  &:active {
    transform: translateY(1px);
    transition: background-color 1s, color 0.3s, transform 0.1s ease-in-out;
  }
`;

const BtnConfig = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px 15px 5px 15px;
  background-color: #464e2e;
  border-radius: 5px 0px 0px 5px;
  &:active {
    transform: translateY(1px);
    transition: background-color 1s, color 0.3s, transform 0.1s ease-in-out;
  }
`;

const BtnExit = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px 15px 5px 15px;
  background-color: #464e2e;
  border-radius: 0px 5px 5px 0px;
  &:active {
    transform: translateY(1px);
    transition: background-color 1s, color 0.3s, transform 0.1s ease-in-out;
  }
`;

const ContenedorBtnsUsuario = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 1229px;
  height: 1px;
  padding: 0px 9.5em 0px 9.5em;
`;

const NavbarUser = () => {
  const [mostrarContenedor, setMostrarContenedor] = useState(false);

  const toggleContenedor = () => {
    setMostrarContenedor(!mostrarContenedor);
  };

  return (
    <>
      <MyNavbar>
        <Link to="/">
          <Logo
            src={LogoImage}
            alt="Logo Huerta Facil"
          />
        </Link>
        <div>
          <Link to="/favoritos">
            <NavBtnFavoritos>Favoritos</NavBtnFavoritos>
          </Link>
          <Link to="/recordatorios">
            <NavBtnRecordatorios>Recordatorios</NavBtnRecordatorios>
          </Link>

          <i
            className="fa fa-user-circle-o iconoUsuario"
            aria-hidden="true"
            onClick={toggleContenedor}
          ></i>
        </div>
      </MyNavbar>
      {mostrarContenedor && (
        <ContenedorBtnsUsuario>
          <Link to="/configuser">
            <BtnConfig>
              <img
                src={ConfigSvg}
                alt="Boton Configuracion"
                style={{ width: "16px", height: "16px" }}
              />
            </BtnConfig>
          </Link>
          <Link to="/exit">
            <BtnExit>
              <img
                src={ExitSvg}
                alt="Boton Salir"
                style={{ width: "16px", height: "16px" }}
              />
            </BtnExit>
          </Link>
        </ContenedorBtnsUsuario>
      )}
    </>
  );
};

export default NavbarUser;
