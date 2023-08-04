import { SteteContext } from "./context/StateContext"
import Routing from "./routes"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {

  return (
    <SteteContext>
      <Routing/>
    </SteteContext>
  )
}

export default App
