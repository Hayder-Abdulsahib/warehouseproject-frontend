// Styling
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
import BeatLoader from "react-spinners/BeatLoader";

import NavBar from "./components/NavBar";
// Components
import Routes from "./components/Routes";

import { useState } from "react";
import { useSelector } from "react-redux";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const products = useSelector((state) => state.products.products);
  const loadingProducts = useSelector((state) => state.products.loading);
  const loadingBakeries = useSelector((state) => state.bakeries.loading);
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />

      {loadingProducts || loadingBakeries ? (
        <BeatLoader size={20} />
      ) : (
        <Routes products={products} />
      )}
    </ThemeProvider>
  );
}

export default App;
