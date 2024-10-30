import React from "react";
import styles from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/Auth";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: { auth: { isAuthenticated: number } }) => state.auth.isAuthenticated
  );

  const LogIn = () => {
    dispatch(authActions.login());
  };
  const logOut = () => {
    dispatch(authActions.logout());
  };

  let bt = <div onClick={LogIn}>toggle</div>;

  if (isAuthenticated) {
    bt = <div onClick={logOut}>toggle</div>;
  }

  return (
    <div className={styles.mainContainer}>
      {bt}
      {isAuthenticated ? "Hello Guy" : "Log in"}
    </div>
  );
};

export default Header;
