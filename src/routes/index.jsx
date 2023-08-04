import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ResetPassword, SignIn, SignUp, Home } from "../pages"
import NotFound from "../pages/not-found/NotFound"
// import Navbar from "../components/Navbar"

const Routing = () => {
    return (
        <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
            <Route path='/' element={<SignIn/>} />
            <Route path='/register' element={<SignUp/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/reset-password' element={<ResetPassword/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default Routing