import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import { Nav } from "./components/Nav/Nav";
import { Hero } from "./components/Hero/Hero";
import { Profile } from "./components/Hero/Profile";
import { Main } from "./components/Container/Main";
import { Footer } from "./components/Container/Footer";

const theme = {
  colors: {
    nav: "#4F4D53",
    body: "#fff",
    text: "#e8be02",
    footer: "#4F4D53",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Nav />
        <Hero />
        <Profile />
        <Main />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
