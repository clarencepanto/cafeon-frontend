import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pos from "./pages/Pos.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Customers from "./pages/Customers.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Navbar />

        <Routes>
          <Route path="/" element={<Pos />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
