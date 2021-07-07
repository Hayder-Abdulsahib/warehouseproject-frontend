import { Logo, NavItem, ThemeButton, SignupButton } from "../styles";

import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import { signOut } from "../store/actions/authActions";

import darkLogo from "../dark-logo.png";
import lightLogo from "../light-logo.png";

const NavBar = ({ currentTheme, toggleTheme }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignOut = () => {
    dispatch(signOut(history));
  };
  return (
    <div className="navbar navbar-expand">
      <Logo className="navbar-brand" to="/">
        <img src={currentTheme === "light" ? lightLogo : darkLogo} alt="logo" />
      </Logo>
      <div className="navbar-nav ml-auto">
        {user && (
          <>
            <NavItem className="nav-item" to="/bakeries">
              Bakeries
            </NavItem>
            <NavItem className="nav-item" to="/products">
              Products
            </NavItem>
          </>
        )}
        {user ? (
          <NavItem className="nav-item" to="/">
            <h5>Hello {user.username}</h5>
            <button onClick={handleSignOut}>Sign Out</button>
          </NavItem>
        ) : (
          <>
            <NavItem className="nav-item" to="/signin">
              SignIn
            </NavItem>
            <NavItem className="nav-item" to="/signup">
              SignUp
            </NavItem>
          </>
        )}

        <ThemeButton className="nav-item" onClick={toggleTheme}>
          {currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </div>
  );
};

export default NavBar;
