import UserFinder from "./Components/UserFinder";
import UsersContext from "./store/users-context";
// import Users from "./Components/Users";

function App() {

  const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
  ];

  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    <div>
      <UsersContext.Provider value={usersContext}>
        <UserFinder />
      </UsersContext.Provider>
    </div>
  );
}

export default App;
