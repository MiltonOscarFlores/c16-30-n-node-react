import Login from "./components/Login";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainCards from "../src/components/MainCards";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <MainCards />
            </>
          }
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<SignUp />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
