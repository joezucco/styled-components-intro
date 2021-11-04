import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Container>
          <Header />
          <h1>Hello World</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
