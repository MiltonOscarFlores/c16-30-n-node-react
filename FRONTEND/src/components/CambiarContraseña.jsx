/* eslint-disable react-refresh/only-export-components */
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.section`
  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1229px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1229px;
    min-height: 600px;
    margin: 0 auto;
    background: rgb(199, 205, 176);
    background: linear-gradient(
      6deg,
      rgba(199, 205, 176, 0) 16%,
      rgba(199, 205, 176, 1) 85%
    );
    text-align: center;
    border-radius: 15px;
  }
`;

const Myh1 = styled.h1`
  width: 960px;
  font-size: 2rem;
  font-weight: 700;
  color: #424242;
  padding: 3rem 0;
`;

const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 40%;
`;

const MyInput = styled.input`
  padding: 0.5em;
  border: 2px solid #464e2e;
  border-radius: 5px;
  background-color: #ffffff70;
  border: 0;
  border-bottom: 2px solid #9a9a9a;
  margin: 5px 0px 15px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 14px;
    color: #9a9a9a;
  }
`;

const ButtonContraseña = styled.button`
  /* Estilos específicos para el botón en el formulario */
  width: 152px;
  height: 33px;
  letter-spacing: 0.2px; /* aumenta el espaciado entre letras en 2 píxeles */

  background: #c7cdb0;
  color: #5d5b59;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 13px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1.3px 1.5px 2px rgba(0, 0, 0, 0.2);
  transition: border-color 0.2s;

  &:active {
    transform: translateY(1px);
    background-color: #3d4425;
    transition: background-color 1s, color 0.3s, transform 0.1s ease-in-out;
    box-shadow: 1.5px 1.5px 2px rgba(0, 0, 0, 0.2);
  }
`;

const ContenedorBotones = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
`;

/////////////////////////////////////////////////////////////////////////
const CambiarContraseña = () => {
  const handleSubmit = (event) => {
    // Aquí puedes realizar lógica adicional si es necesario
    // pero por ahora, simplemente evitar la acción predeterminada del formulario
    event.preventDefault();
  };
  return (
    <Wrapper>
      <Myh1>Cambiar contraseña</Myh1>
      <MyForm onSubmit={handleSubmit}>
        <MyInput
          type="password"
          id="pasword"
          placeholder="Contraseña actual"
        />
        <MyInput
          type="password"
          id="nuevopasword"
          placeholder="Contraseña nueva"
        />
        <MyInput
          type="password"
          id="repetirnuevopasword"
          placeholder="Repetir contraseña nueva"
        />

        <ContenedorBotones>
          <Link to="/mainuser">
            <ButtonContraseña>Confirmar</ButtonContraseña>
          </Link>
        </ContenedorBotones>
      </MyForm>
    </Wrapper>
  );
};
export default CambiarContraseña;
