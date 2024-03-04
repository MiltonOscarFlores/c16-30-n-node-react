import styled from "styled-components";
import LoginBackgroundSVG from "../assets/images/LoginBackground.svg";
import Form from "./Form";
import ButtonGreen from "./ButttonGreen";

const Wrapper = styled.section`
  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1229px) {
    display: flex;

    max-width: 1229px;
    height: 600px;
    margin: 0 auto;
    background: #e9e5d6;
    text-align: center;
    border-radius: 15px 0px 0px 15px;
    box-shadow: 1.5px 2px 3px rgba(0, 0, 0, 0.7);
  }
`;

const BackgroundGoogle = styled.section`
  width: 350px;
  height: 600px;
  background: #e9e5d6;
  border-radius: 15px 0px 0px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBackground = styled.section`
  width: 75%;
  height: 600px;
  background: url(${LoginBackgroundSVG}) no-repeat bottom;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextoLoginBackground = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Myh2 = styled.h2`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 24px;
`;

const Myh3 = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  margin-top: -20px;
`;

////////////////////////////////////////////////////////////////
const Login = () => {
  return (
    <Wrapper>
      <BackgroundGoogle>
        <TextoLoginBackground>
          <Myh2>Bienvenido de vuelta</Myh2>
          <Myh3>¡Nos alegramos de volver a verte!</Myh3>
          <ButtonGreen
            text="Continuar con Google"
            iconG={true}
          />
        </TextoLoginBackground>
      </BackgroundGoogle>
      <LoginBackground>
        <Form />
      </LoginBackground>
    </Wrapper>
  );
};

export default Login;
