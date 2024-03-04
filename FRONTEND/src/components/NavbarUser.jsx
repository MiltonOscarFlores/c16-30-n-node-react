import styled from "styled-components";
import LogoImage from "../assets/images/Logo.svg";
import ConfigSvg from "../assets/images/Config.svg";
import ExitSvg from "../assets/images/Exit.svg";
import { Link, useNavigate} from "react-router-dom";
import MyContext from '../context/MyContext'
import { useContext, useState } from 'react'

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
`;
const BtnExit = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding-left: 15px;
`;

///////////////////////////////////////////////////////

const NavbarUser = () => {

  const {myData, setMyData} = useContext(MyContext)
  const navigate = useNavigate()
  const [exit, setExit] = useState(false)

  const logout = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/user/logout`)
      const data = await response.json()
      console.log(data.data[0].message)
      if(data.data[0].status === 200){
        setMyData({})
        navigate('/')
      }
    } catch (error) {
      console.log('Error al salir de la sesión: ', error)
    }
  }

  const confirmLogout = () => {

  }

  return (
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
      </div>
    </MyNavbar>
  );
};

export default NavbarUser;
