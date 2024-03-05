import styled from "styled-components";
import { Link } from "react-router-dom";

const FormWrap = styled.section`
  margin: 0 auto;
  background: #e9e5d6;
  width: 575px;
  height: 430px;
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

const MyCheckbox = styled.input`
  &[type="checkbox"] {
    color: #bf4f74;
    outline: none;
  }
`;

const MyLabel = styled.label`
  font-weight: 400;
  font-size: 13px;
`;
const MyCheckboxContainer = styled.section`
  display: flex;
  margin-bottom: 15px;
`;
const SpanRecuerdame = styled.span`
  margin-left: 5px;
  color: #9a9a9a;
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

const Parrafo = styled.p`
  margin-top: 25px;
  font-size: 14px;
  text-align: center;
`;

const SpanReg = styled.span`
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
`;
const MyH1 = styled.h1`
  font-weight: 600;
  font-size: 28px;
  text-align: center;
  padding-top: 10px;
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
        <MyH1>Iniciar sesión</MyH1>
        <MyInput
          type="email"
          placeholder="Email"
        />
        <MyInput
          type="password"
          placeholder="Contaseña"
        />
        <MyCheckboxContainer>
          <MyCheckbox type="checkbox" />
          <MyLabel>
            <SpanRecuerdame>Recuérdame</SpanRecuerdame>
          </MyLabel>
        </MyCheckboxContainer>
        <Link to="/mainuser">
          <ButtonGreenForm>Iniciar sesión</ButtonGreenForm>
        </Link>
        <Parrafo>
          ¿No tienes una cuenta? <br />
          <Link to="/signup">
            <SpanReg>Regístrate aquí</SpanReg>
          </Link>
        </Parrafo>
      </MyForm>
    </FormWrap>
  );
};

export default Form;
