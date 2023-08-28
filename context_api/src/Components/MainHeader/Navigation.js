import React, { useContext } from "react";
import AuthContext from "../../store/auth_context";
import classes from "./Navigation.module.css";

const Navigation = () => {

  const ctxData = useContext(AuthContext);   // In the useContext hook we just need to point to the context

  return (
    // Consumer is one way of using the context api
    // <AuthContext.Consumer>
    //   {(ctxData) => {
    //     return (
    //       <nav className={classes.nav}>
    //         <ul>
    //           {ctxData.isLoggedIn && (
    //             <li>
    //               <a href="/">Users</a>
    //             </li>
    //           )}
    //           {ctxData.isLoggedIn && (
    //             <li>
    //               <a href="/">Admin</a>
    //             </li>
    //           )}
    //           {ctxData.isLoggedIn && (
    //             <li>
    //               <button onClick={props.onLogout}>Logout</button>
    //             </li>
    //           )}
    //         </ul>
    //       </nav>
    //     );
    //   }}
    // </AuthContext.Consumer>

    // Another way is to use useContext hook
    <nav className={classes.nav}>
      <ul>
        {ctxData.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctxData.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctxData.isLoggedIn && (
          <li>
            <button onClick={ctxData.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
