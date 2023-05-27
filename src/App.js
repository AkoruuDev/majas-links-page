import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles/globalStyle";
import Main from "./Pages/Main";
import Index from "./Pages/Main/Index"

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/elements" element={ <Main /> } />
          <Route path="/contact" element={ <Index /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
