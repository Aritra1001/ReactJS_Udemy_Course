import React, {useContext} from "react";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import MainHeader from "./Components/MainHeader/MainHeader";
import AuthContext from "./store/auth_context";

function App() {

  const ctxData = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctxData.isLoggedIn && <Login  />}
        {ctxData.isLoggedIn && <Home/>}
      </main>
    </React.Fragment>
  );
}

export default App;
