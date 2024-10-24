import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
