import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainCards from "../src/components/MainCards";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import MainFilters from "./components/MainFilters";
import NavbarUser from "./components/NavbarUser";
import Recordatorios from "./components/Recordatorios";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.isAuthPage ? "#C7CDB0" : "#e9e5d6")};
    box-sizing: border-box;
    padding: 0;
    margin: 0 auto;
    font-family: "Poppins", sans-serif;
  }
`;

const AppContainer = styled.div`
  /* Otros estilos globales pueden ir aquí */
`;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AppContainer>
              <GlobalStyle />
              <Navbar />
              <Main />
              <MainFilters />
              <MainCards />
            </AppContainer>
          }
        />
        <Route
          path="/login"
          element={
            <AppContainer>
              <GlobalStyle isAuthPage />
              <Navbar />
              <Login />
            </AppContainer>
          }
        />
        <Route
          path="/signup"
          element={
            <AppContainer>
              <GlobalStyle isAuthPage />
              <Navbar />
              <SignUp />
            </AppContainer>
          }
        />
        <Route
          path="/recordatorios"
          element={
            <AppContainer>
              <GlobalStyle isAuthPage={false} />
              <NavbarUser />
              <Recordatorios />
            </AppContainer>
          }
        />
        <Route
          path="/mainuser"
          element={
            <AppContainer>
              <GlobalStyle isAuthPage={false} />
              <NavbarUser />
              <Main />
              <MainFilters />
              <MainCards />
            </AppContainer>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
