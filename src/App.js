import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
