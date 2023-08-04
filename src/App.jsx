import Routing from "./routes"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StateContext } from "./context/StateContext"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SignIn, SignUp } from "./pages";

const App = () => {
  
  return (
    <StateContext>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn/>} />
          <Route path='/register' element={<SignUp/>} />
          <Route path='/*' element={<Routing/>} />
        </Routes>
      </BrowserRouter>
    </StateContext>
  )
}

export default App
