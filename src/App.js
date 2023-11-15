import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Catalog from "./pages/catalog";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
