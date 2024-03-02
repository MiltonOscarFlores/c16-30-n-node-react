import styled from "styled-components";

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
  font-weight: 800;
  color: #424242;
`;

const WrapperBotones = styled.section`
  display: flex;
  width: 960px;
  gap: 2rem;
`;

const MyButton = styled.button`
  background-color: #e9e5d6;
  color: #121712;
  padding: 0.3rem 1rem;
  font-size: 14px;
  font-weight: 500;
  border-radius: 10px;
`;

const Myh2Wrapper = styled.section`
  display: flex;
  text-align: start;
`;
const Myh2 = styled.h2`
  width: 960px;
  font-size: 1.3rem;
  font-weight: 700;
`;

const ListWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 960px;
`;

const WrapperCorazones = styled.section`
  width: 60px;
`;

const WrapperTexto = styled.article`
  width: 900px;
`;

////////////////////////////////////////////////////////////////////////
const Recordatorios = () => {
  return (
    <Wrapper>
      <Myh1>Recordatorios</Myh1>
      <WrapperBotones>
        <MyButton> Acelga</MyButton>
        <MyButton> Ají</MyButton>
        <MyButton> Ajo</MyButton>
        <MyButton> Apio</MyButton>
        <MyButton> Tomate</MyButton>
      </WrapperBotones>
      <Myh2Wrapper>
        <Myh2>Favoritos</Myh2>
      </Myh2Wrapper>
      <ListWrapper>
        <WrapperCorazones>corazon</WrapperCorazones>
        <WrapperTexto> texto1</WrapperTexto>
        <WrapperCorazones>corazon</WrapperCorazones>
        <WrapperTexto> texto1</WrapperTexto>
        <WrapperCorazones>corazon</WrapperCorazones>
        <WrapperTexto> texto1</WrapperTexto>
      </ListWrapper>
    </Wrapper>
  );
};

export default Recordatorios;
