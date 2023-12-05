import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Catalog from "./pages/catalog";
import About from "./pages/about";
import Home from "./pages/home";
import Admin from "./pages/admin";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalProvider from "./store/globalProvider";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
