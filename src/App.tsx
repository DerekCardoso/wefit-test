import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { Router } from "./routes/Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
