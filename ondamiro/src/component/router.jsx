import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "src/style/global.style";
import Main from "../page/Main/Main";
import Topbar from "../content/Topbar";

const Router = () => {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="topbar" element={<Topbar />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;