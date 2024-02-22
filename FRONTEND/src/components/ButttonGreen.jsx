import styled from "styled-components";
import VectorGoogle from "../assets/images/VectorGoogle.svg";

const BtnGoogle = styled.button`
  width: 234px;
  height: 46px;
  background: #464e2e;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  border-radius: 15px;
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

const IconoGoogle = styled.img`
  width: 19px; /* Ajusta el tamaño según sea necesario */
  height: 20px; /* Ajusta el tamaño según sea necesario */
  margin-right: 10px; /* Espacio entre el icono y el texto */
`;

/////////////////////////////////////////////

// eslint-disable-next-line react/prop-types
const ButtonGreen = ({ text, iconG }) => {
  return (
    <BtnGoogle>
      {iconG && (
        <IconoGoogle
          src={VectorGoogle}
          alt="Vector Logo Google"
        />
      )}

      {text}
    </BtnGoogle>
  );
};

export default ButtonGreen;
