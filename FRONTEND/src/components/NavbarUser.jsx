import styled from "styled-components";
import LogoImage from "../assets/images/Logo.svg";
import ConfigSvg from "../assets/images/Config.svg";
import ExitSvg from "../assets/images/Exit.svg";
import { Link, useNavigate} from "react-router-dom";
import MyContext from '../context/MyContext'
import { useContext, useState, useEffect } from 'react'


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

///////////////////////////////////////////////////////

const NavbarUser = () => {

  const {myData, setMyData} = useContext(MyContext)
  const navigate = useNavigate()
  const [exit, setExit] = useState(false)
  const [mostrarContenedor, setMostrarContenedor] = useState(false);

  
  const toggleContenedor = () => {
    setMostrarContenedor(!mostrarContenedor);
  };

  const logout = async () => {
    try {

      const response = await fetch(`${import.meta.env.VITE_BASE_URL || import.meta.env.VITE_LOCAL_URL}/user/logout`, {
        method: 'GET',
        credentials: 'include',
        mode: 'cors' 
      });
      const data = await response.json();
      console.log(data)
      console.log(document.cookie)
      if (data.data[0].status === 200) {
        setMyData({});
        navigate('/');
      }
    } catch (error) {
      console.log('Error al salir de la sesión: ', error);
    }
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
            <BtnExit onClick={() => logout()}>
              <img
                src={ExitSvg}
                alt="Boton Salir"
                style={{ width: "16px", height: "16px" }}
              />
            </BtnExit>
        </ContenedorBtnsUsuario>
      )}
    </>
);
};

export default NavbarUser;
