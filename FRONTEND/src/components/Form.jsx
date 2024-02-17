import styled from "styled-components";
import ButtonGreen from "./ButttonGreen";

const FormWrap = styled.section`
  margin: 0 auto;
  background: #e9e5d6;
  width: 660px;
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
  border: 1px solid black;
  background-color: #e9e5d6;
  border-radius: 6px;
  margin: 5px 0px 15px;

  &:focus {
    outline: 2px solid rgba(70, 78, 46, 0.5);
  }
  &[type="checkbox"] {
    outline: red;
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
`;

const ButtonGreenForm = styled(ButtonGreen)`
  /* Estilos específicos para el botón en el formulario */
  width: 150px;
  height: 36px;
`;

const Parrafo = styled.p`
  margin-top: 25px;
  font-size: 14px;
`;

const SpanReg = styled.span`
  font-weight: 600;
  cursor: pointer;
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
        <MyLabel htmlFor="email">Email</MyLabel>
        <MyInput type="email" />
        <MyLabel htmlFor="contraseña">Contraseña</MyLabel>
        <MyInput type="password" />
        <MyCheckboxContainer>
          <MyCheckbox type="checkbox" />
          <MyLabel>
            <SpanRecuerdame>Recuérdame</SpanRecuerdame>
          </MyLabel>
        </MyCheckboxContainer>
        <ButtonGreenForm
          text="Ingresar"
          iconG={false}
        />
        <Parrafo>
          ¿No tienes una cuenta? <SpanReg>Regístrate aquí</SpanReg>
        </Parrafo>
      </MyForm>
    </FormWrap>
  );
};

export default Form;
