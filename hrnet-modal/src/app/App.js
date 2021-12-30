import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modalpage from "../pages/modalpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route to="/" element={<Modalpage/>}/>
      </Routes>
    </BrowserRouter>
  )
  }

export default App;
