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
  font-weight: 700;
  color: #424242;
  padding: 3rem 0;
`;
const Exit = () => {
  return (
    <Wrapper>
      <Myh1>De verdad quieres salir </Myh1>
    </Wrapper>
  );
};

export default Exit;
