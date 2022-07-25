import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Topbar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
