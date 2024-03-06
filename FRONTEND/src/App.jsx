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
import Favoritos from "./components/Favoritos";
import ConfigUser from "./components/ConfigUser";
import Exit from "./components/Exit";
import MyContextProvider from "./context/UserContext"
import CambiarContraseña from "./components/CambiarContraseña";

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
    <MyContextProvider>
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
        <Route
          path="/favoritos"
          element={
            <AppContainer>
              <GlobalStyle isAuthPage={false} />
              <NavbarUser />
              <Favoritos />
            </AppContainer>
          }
        />
        <Route
          path="/configuser"
          element={
            <AppContainer>
              <GlobalStyle isAuthPage={false} />
              <NavbarUser />
              <ConfigUser />
            </AppContainer>
          }
        />
        <Route
          path="/cambiarcontraseña"
          element={
            <AppContainer>
              <GlobalStyle isAuthPage={false} />
              <NavbarUser />
              <CambiarContraseña />
            </AppContainer>
          }
        />
        <Route
          path="/exit"
          element={
            <AppContainer>
              <GlobalStyle isAuthPage={false} />
              <NavbarUser />
              <Exit />
            </AppContainer>
          }
        />
      </Routes>
    </Router>
    </MyContextProvider>
  );
};

export default App;
