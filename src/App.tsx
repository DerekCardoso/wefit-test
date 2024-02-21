import { BrowserRouter } from "react-router-dom";
// import { CartContextProvider } from './context/CartContext'
// import { Router } from "./routes/Router";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
      </BrowserRouter>
    </>
  );
}

export default App;
