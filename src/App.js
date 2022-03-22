import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Weather from "./Component/Weather";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Weather" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
