import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/post/:id" element={<Single />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
