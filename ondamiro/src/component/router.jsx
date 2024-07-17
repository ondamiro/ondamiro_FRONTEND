import { BrowserRouter, Routes, Route } from "react-router-dom"
// import GlobalStyle from "src/style/global.style"
import GlobalStyle from "../style/global.style"
import Main from "../page/Main/Main"
import Topbar from "../common/Topbar/Topbar"
import Login from "../component/Auth/Login/Login"
import SignUp from "../component/Auth/SignUp/SignUp"
import Save from "../page/FoodSave/Save"

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="topbar" element={<Topbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/save" element={<Save />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
