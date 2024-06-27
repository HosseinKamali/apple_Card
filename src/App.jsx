import { Route, Routes } from "react-router-dom";
import CardOne from "./cmponents/card-one/CardOne";
import CardThree from "./cmponents/card-three/CardThree";
import CardTwo from "./cmponents/card-two/CardTwo";
import Home from "./pages/home/Home";
import Others from "./pages/others/Others";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/women" element={<Others/>}/>
    </Routes>
  );
}

export default App;
