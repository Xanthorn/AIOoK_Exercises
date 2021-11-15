import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Products from './Products';
import ProductDetails from './ProductDetails';
import EditProduct from './EditProduct';
import FindProduct from './FindProduct';
import { Component } from 'react';
import ProductClass, { statuses } from './class/ProductClass';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        new ProductClass("Masło", statuses.ACTIVE),
        new ProductClass("Chleb", statuses.INBASKET),
        new ProductClass("Ciastka", statuses.BOUGHT)
      ]
    }
  }
  render() {
    return (
      <BrowserRouter>
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
          <Route exact path="/" element={<Products products={this.state.products} />} />
          <Route exact path="/:id" render={({ match }) => <ProductDetails product={this.state.products.filter(x => { return x.id === match.params.id })} />} />
          <Route path="/:id/edit" element={<EditProduct />} />
          <Route path="/search" element={<FindProduct />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
