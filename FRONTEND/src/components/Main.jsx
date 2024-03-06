import { useState } from "react";
import styled from "styled-components";
import LogoPlanta from "../assets/images/LogoPlanta.svg";
import VectorSearch from "../assets/images/VectorSearch.svg";
import MacetasMain from "../assets/images/MacetasMain.svg";
import { useSearchParams } from "react-router-dom";

const Wrapper = styled.section`
  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1229px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1229px;
    height: 600px;
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

const MyH1 = styled.h1`
  font-family: poppins, sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: #464e2e;
`;

const ContainerLeft = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 5;
`;
const ContainerRight = styled.section`
  display: flex;
  flex-direction: column;
  box-shadow: 0.5px 1.5px 10px rgba(0, 0, 0, 0.3);
  height: 436px;
  width: 436px;
  overflow: hidden;
  border-radius: 50%;
  background: rgb(166, 189, 121);
  background: linear-gradient(
    250deg,
    rgba(166, 189, 121, 0.5775560224089635) 0%,
    rgba(212, 219, 197, 0.4318977591036415) 78%
  );
  z-index: 2;
`;

const MyInput = styled.input`
  padding: 0.5em;
  border: 2px solid #464e2e;
  background-color: transparent;
  border-radius: 6px;
  margin-top: -40px;

  &:focus {
    outline: 2px solid rgba(70, 78, 46, 0.5);
  }
`;

const MyImg = styled.img`
  border-radius: 50%;
  width: 400px;
  height: 400px;
  margin: 40px 0px 0px 20px;
`;

const MyIconSearch = styled.div`
  position: absolute;
  top: 87.2%;
  right: 10px;
  transform: translateY(-50%);
  height: 30px;
  width: 30px;
  background-color: #464e2e;
  border-radius: 5px 5px 5px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const MySpanVector = styled.span`
  color: #e9e5d6;
  &:active {
    transform: translateY(1px);
    transition: background-color 1s, color 0.2s, transform 0.1s ease-in-out;
    color: white;
  }
`;

const MyVectorMacetas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 196px;
  height: 128px;
  position: absolute;
  margin-left: -60rem;
  margin-top: 25rem;
`;

const Main = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState();

  const search = (e) => {
    e.preventDefault();
    const params = Object.fromEntries(searchParams.entries());

    if (inputValue) {
      params.search = inputValue;
    }
    if (params.search && !inputValue) {
      delete params.search;
    }
    setSearchParams(params);
    return;
  };

  return (
    <Wrapper>
      <ContainerLeft>
        <MyH1> Cuide de sus plantas</MyH1>
        <MyInput
          type="search"
          placeholder="Buscar planta..."
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              search(e);
            }
            return;
          }}
        />
        <MyIconSearch onClick={search}>
          <MySpanVector>
            <i
              className="fa fa-search"
              aria-hidden="true"
            ></i>
          </MySpanVector>
        </MyIconSearch>
      </ContainerLeft>
      <ContainerRight>
        <MyImg
          src={LogoPlanta}
          alt="LogoPlanta"
        />
      </ContainerRight>
      <MyVectorMacetas>
        <img
          src={MacetasMain}
          alt="Foto de macetas"
        />
      </MyVectorMacetas>
    </Wrapper>
  );
};

export default Main;
