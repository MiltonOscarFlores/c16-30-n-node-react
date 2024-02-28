import styled from "styled-components";
import LogoImage from "../assets/images/Logo.svg";
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

const NavBtnIngresar = styled.button`
  background: transparent;
  color: black;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  padding: 3px 20px;
  height: 30px;

  &:active {
    transform: translateY(1px);
    transition: background-color 1s, color 0.3s, transform 0.1s ease-in-out;
  }
`;

const NavbarUser = () => {
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
          <NavBtnIngresar>Favoritos</NavBtnIngresar>
        </Link>
        <Link to="/recordatorios">
          <NavBtnIngresar>Recordatorios</NavBtnIngresar>
        </Link>
        <Link to="/configuser">
          <NavBtnIngresar>Opc</NavBtnIngresar>
          <NavBtnIngresar>Exit</NavBtnIngresar>
        </Link>
      </div>
    </MyNavbar>
  );
};

export default NavbarUser;
