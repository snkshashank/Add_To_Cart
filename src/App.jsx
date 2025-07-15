import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Reducer';
import ProductList from './components/ProductList';
import Cart from './components/Cart.jsx';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import './css/App.css'; // Import the CSS file

const store = createStore(rootReducer);

function Navbar() {
  const cart = useSelector(state => state.cart);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">CAMERAWALAPOTTA</a>
        <button
          className="btn btn-outline-primary position-relative"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#cartOffcanvas"
          aria-controls="cartOffcanvas"
        >
          <i className="bi bi-cart"></i>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8 col-lg-8 col-sm-12">
            <ProductList />
          </div>
        </div>
      </div>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="cartOffcanvas"
        aria-labelledby="cartOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 id="cartOffcanvasLabel">Your Cart</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <Cart />
        </div>
      </div>
    </Provider>
  );
}

export default App;
