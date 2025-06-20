import { Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pos from "./pages/Pos.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Customers from "./pages/Customers.jsx";
import CoffeeProducts from "./pages/posproducts/CoffeeProducts.jsx";
import TeaProducts from "./pages/posproducts/TeaProducts.jsx";
import PastriesProducts from "./pages/posproducts/PastriesProducts.jsx";
import BreadProducts from "./pages/posproducts/BreadProducts.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Navbar />
        <Routes>
          <Route path="/" element={<Pos />}>
            <Route index element={<Navigate to="coffee" />} />
            <Route path="coffee" element={<CoffeeProducts />} />
            <Route path="tea" element={<TeaProducts />} />
            <Route path="pastries" element={<PastriesProducts />} />
            <Route path="bread" element={<BreadProducts />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
