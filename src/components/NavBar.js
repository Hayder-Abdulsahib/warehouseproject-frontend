import { Logo, NavItem, ThemeButton, SignupButton } from "../styles";

import darkLogo from "../dark-logo.png";
import lightLogo from "../light-logo.png";

const NavBar = ({ currentTheme, toggleTheme }) => {
  return (
    <div className="navbar navbar-expand">
      <Logo className="navbar-brand" to="/">
        <img src={currentTheme === "light" ? lightLogo : darkLogo} alt="logo" />
      </Logo>
      <div className="navbar-nav ml-auto">
        <NavItem className="nav-item" to="/bakeries">
          Bakeries
        </NavItem>
        <NavItem className="nav-item" to="/products">
          Products
        </NavItem>
        <NavItem className="nav-item" to="/signup">
          SignUp
        </NavItem>
        <ThemeButton className="nav-item" onClick={toggleTheme}>
          {currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </div>
  );
};

export default NavBar;
