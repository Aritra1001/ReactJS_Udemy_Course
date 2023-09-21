import { useSelector } from "react-redux";
import Auth from "./Components/Auth";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import UserProfile from "./Components/UserProfile";

function App() {

  const isAuth = useSelector(state=> state.auth.isAuthenticated);

  return (
    <>
      <Header/>
      {!isAuth && <Auth/>}
      {isAuth && <UserProfile/>}
      <Counter />
    </>
  );
}

export default App;
