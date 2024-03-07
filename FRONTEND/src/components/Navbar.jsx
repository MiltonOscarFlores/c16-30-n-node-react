import styled from "styled-components";
import LogoImage from "../assets/images/Logo.svg";
import { Link } from "react-router-dom";
import { useContext, useEffect } from 'react'
import MyContext from '../context/MyContext'
import NavbarUser from "./NavbarUser";
import  Cookies  from 'js-cookie';

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
  background: #464e2e;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  border-radius: 10px;
  padding: 3px 20px;
  height: 30px;
  box-shadow: 1.3px 1.5px 2px rgba(0, 0, 0, 0.2);
  transition: border-color 0.2s;

  &:active {
    transform: translateY(1px);
    background-color: #3d4425;
    transition: background-color 1s, color 0.3s, transform 0.1s ease-in-out;
    box-shadow: 1.5px 1.5px 2px rgba(0, 0, 0, 0.2);
  }
`;

const Navbar = () => {
  const {myData, setMyData} = useContext(MyContext)

  if(myData.usuario) {
    return (
      <NavbarUser/>
    )
  }



  return (
    <MyNavbar>
      <Link to="/">
        <Logo
          src={LogoImage}
          alt="Logo Huerta Facil"
        />
      </Link>
      <Link to="/login">
        <NavBtnIngresar>Ingresar</NavBtnIngresar>
      </Link>
    </MyNavbar>
  );
};

export default Navbar;
