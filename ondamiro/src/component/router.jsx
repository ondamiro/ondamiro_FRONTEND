import { BrowserRouter, Routes, Route } from "react-router-dom"
// import GlobalStyle from "src/style/global.style"
import GlobalStyle from "../style/global.style"
import Main from "../page/Main/Main"
import Topbar from "../common/Topbar/Topbar"
import Login from "../component/Auth/Login/Login"
import SignUp from "../component/Auth/SignUp/SignUp"
import Save from "../page/FoodSave/Save"
import MyPage from "../page/MyPage/MyPage"
import Detail from "../page/Detail/Detail"

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
        <Route path="/profile" element={<MyPage />} />
        <Route path="/detail:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
