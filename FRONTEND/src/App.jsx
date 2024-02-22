import Login from "./components/Login";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Login />
      <SignUp />
    </div>
  );
};

export default App;
