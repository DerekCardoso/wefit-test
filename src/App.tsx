import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { Router } from "./routes/Router";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
