import { Link } from "react-router-dom";
import styled from "styled-components";

const FormWrap = styled.section`
  margin: 0 auto;
  background: #e9e5d6;
  width: 540px;
  height: 500px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
`;

const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

const MyInput = styled.input`
  padding: 0.5em;
  border: 2px solid #464e2e;
  background-color: #e9e5d6;
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

const ButtonGreenForm = styled.button`
  /* Estilos específicos para el botón en el formulario */
  width: 400px;
  height: 40px;
  background: #464e2e;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
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

const MyH1 = styled.h1`
  font-weight: 600;
  font-size: 28px;
  text-align: center;
  margin-top: 1px;
`;

const MySelect = styled.select`
  padding: 0.5em;
  border: 2px solid #464e2e;
  background-color: #e9e5d6;
  border: 0;
  border-bottom: 2px solid #9a9a9a;
  margin: 15px 0px 50px;
  font-size: 14px;
  color: #9a9a9a;

  &:focus {
    outline: none;
  }
`;
//////////////////////////////////////////////////////
const Form = () => {
  const handleSubmit = (event) => {
    // Aquí puedes realizar lógica adicional si es necesario
    // pero por ahora, simplemente evitar la acción predeterminada del formulario
    event.preventDefault();
  };
  return (
    <FormWrap>
      <MyForm onSubmit={handleSubmit}>
        <MyH1>Crear cuenta</MyH1>
        <MyInput
          type="textField"
          id="username"
          placeholder="Nombre de Usuario"
        />
        <MyInput
          type="email"
          placeholder="Email"
        />
        <MyInput
          type="password"
          placeholder="Contaseña"
        />
        <MySelect id="provincia">
          <option
            defaultValue=""
            disabled
            hidden
          >
            Provincia
          </option>
          <option value="buenosaires">Buenos Aires</option>
          <option value="catamarca">Catamarca</option>
          <option value="chaco">Chaco</option>
          <option value="chubut">Chubut</option>
          <option value="cordoba">Córdoba</option>
          <option value="corrientes">Corrientes</option>
          <option value="entrerios">Entre Ríos</option>
          <option value="formosa">Formosa</option>
          <option value="jujuy">Jujuy</option>
          <option value="lapampa">La Pampa</option>
          <option value="larioja">La Rioja</option>
          <option value="mendoza">Mendoza</option>
          <option value="misiones">Misiones</option>
          <option value="neuquen">Neuquén</option>
          <option value="rionegro">Río Negro</option>
          <option value="salta">Salta</option>
          <option value="sanjuan">San Juan</option>
          <option value="sanluis">San Luis</option>
          <option value="santacruz">Santa Cruz</option>
          <option value="santafe">Santa Fe</option>
          <option value="santiago">Santiago del Estero</option>
          <option value="tierradelfuego">Tierra del Fuego</option>
          <option value="tucuman">Tucumán</option>
        </MySelect>

        <Link to="/mainuser">
          <ButtonGreenForm>Crear cuenta</ButtonGreenForm>
        </Link>
      </MyForm>
    </FormWrap>
  );
};

export default Form;
