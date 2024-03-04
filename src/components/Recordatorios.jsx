import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1229px;
  min-height: 600px;
  margin: 0 auto;
  background: linear-gradient(
    6deg,
    rgba(199, 205, 176, 0) 16%,
    rgba(199, 205, 176, 1) 85%
  );
  text-align: center;
  border-radius: 15px;
`;

const Myh1 = styled.h1`
  width: 960px;
  font-size: 2rem;
  font-weight: 700;
  color: #424242;
  padding: 3rem 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 20px;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;

  gap: 15px;
`;

const Button1 = styled.button`
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

const RightPanel = styled.div`
  width: 60%;
  padding: 20px;
  background-color: transparent;
  border-radius: 10px;
  color: #424242;
`;

const Recordatorios = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (description) => {
    setSelectedButton(description);
  };

  return (
    <Wrapper>
      <Myh1>Recordatorios</Myh1>
      <Container>
        <LeftColumn>
          <Button1 onClick={() => handleButtonClick("Descripción del Botón 1")}>
            Botón 1
          </Button1>
          <Button1 onClick={() => handleButtonClick("Descripción del Botón 2")}>
            Botón 2
          </Button1>
          <Button1 onClick={() => handleButtonClick("Descripción del Botón 3")}>
            Botón 3
          </Button1>
        </LeftColumn>
        <RightPanel>
          <h2>Descripción:</h2>
          <p>{selectedButton}</p>
        </RightPanel>
      </Container>
    </Wrapper>
  );
};

export default Recordatorios;
