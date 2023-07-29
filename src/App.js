import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles/globalStyle";
// import Main from "./Pages/Main";
import Index from "./Pages/Main/Index"
import Home from "./Pages/Home";
import { Admin, SignIn, SignUp } from "./Pages/admin";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          {/* <Route path="/contact" element={ <Main /> } /> */}
          <Route path="/contact" element={ <Index /> } />
          
          <Route path="/admin" element={ <Admin /> } />
          <Route path="/admin/sign-in" element={ <SignIn /> } />
          <Route path="/admin/sign-up" element={ <SignUp /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
