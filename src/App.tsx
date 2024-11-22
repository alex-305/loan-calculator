import Navbar from "@/components/Nav/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import LoanCalculator from "./pages/LoanCalculator";

function App() {
  return (
    <div className="bg-slate-950 text-white">
      <BrowserRouter>
        <div>
          <Navbar className="bg-white text-black" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/loan" element={<LoanCalculator />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
