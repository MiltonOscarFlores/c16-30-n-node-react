import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
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
`;

const Myh1 = styled.h1`
  width: 960px;
  font-size: 2rem;
  font-weight: 700;
  color: #424242;
  padding: 3rem 0;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Card = styled.div`
  background-color: #c7cdb0;
  width: 150px;
  height: 250px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Favoritos = () => {
  return (
    <Wrapper>
      <Myh1>Favoritos</Myh1>
      <CardContainer>
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </Wrapper>
  );
};

export default Favoritos;
