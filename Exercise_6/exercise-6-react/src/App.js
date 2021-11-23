import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from './Components/Products';
import ProductDetails from './Components/ProductDetails';
import EditProduct from './Components/EditProduct';
import FindProduct from './Components/FindProduct';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">Lista produktów</Link>
              </li>
              <li className="nav-item">
                <Link to={'/search'} className="nav-link">Znajdź produkt</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/product/:id/edit" render={(match) => <EditProduct id={match.params.id} />} />
        <Route path="/search" element={<FindProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
