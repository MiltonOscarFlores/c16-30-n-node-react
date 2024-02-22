import styled from "styled-components";
import ButtonGreen from "./ButttonGreen";

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
  border-radius: 6px;
  margin: 5px 0px 15px;

  &:focus {
    outline: 2px solid rgba(70, 78, 46, 0.5);
  }
`;

const MyLabel = styled.label`
  font-weight: 400;
  font-size: 13px;
`;

const ButtonGreenForm = styled(ButtonGreen)`
  /* Estilos específicos para el botón en el formulario */
  width: 150px;
  height: 36px;
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
        <MyLabel htmlFor="username">Nombre de Usuario</MyLabel>
        <MyInput
          type="textField"
          id="username"
        />
        <MyLabel htmlFor="email">Email</MyLabel>
        <MyInput type="email" />
        <MyLabel htmlFor="contraseña">Contraseña</MyLabel>
        <MyInput
          type="password"
          style={{ marginBottom: "2rem" }}
        />

        <ButtonGreenForm
          text="Crear cuenta"
          iconG={false}
        />
      </MyForm>
    </FormWrap>
  );
};

export default Form;
