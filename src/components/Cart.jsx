import React from 'react';
import { connect } from 'react-redux';
import '../css/Cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
    const totalPrice = cart.reduce((sum, item) => sum + item.Price * item.quantity, 0);

    const handleIncrement = (productId, currentQuantity) => {
        updateQuantity(productId, currentQuantity + 1);
    };

    const handleDecrement = (productId, currentQuantity) => {
        if (currentQuantity > 1) {
            updateQuantity(productId, currentQuantity - 1);
        }
    };

    return (
        <div className="container cart-container">
            <h2 className="cart-title">Shopping Cart</h2>
            {cart.length === 0 ? (
                <p className="cart-empty-message">Your cart is empty.</p>
            ) : (
                <div>
                    <ul className="cart-list row">
                        {cart.map(item => (
                            <li key={item.id} className="cart-item col-md-12 d-flex align-items-center mb-3">
                                <div className="col-md-5">
                                    <img src={item.image} alt={item.name} className="cart-item-image img-fluid" />
                                </div>
                                <div className="col-md-7">
                                    <h3 className="cart-item-title">{item.name}</h3>
                                    <p className="cart-item-Price">Rs.{item.Price} per unit</p>
                                    <p className="cart-item-stock">In stock</p>
                                    <p className="cart-item-shipping">Eligible for FREE Shipping</p>

                                    <div className="col-md-3 d-flex align-items-center">
                                        <button className="btn btn-secondary btn-sm mx-1" onClick={() => handleDecrement(item.id, item.quantity)}>-</button>
                                        <span className="cart-item-quantity mx-2">{item.quantity}</span>
                                        <button className="btn btn-secondary btn-sm mx-1" onClick={() => handleIncrement(item.id, item.quantity)}>+</button>

                                        <div className="col-md-2">
                                            <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-7z" />
                                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1 0-2h3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1h3a1 1 0 0 1 1 1zm-2-.5a.5.5 0 0 0-.5-.5h-3.5v1h4V2.5z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary mt-4">
                        <h3>Subtotal ({cart.length} items): Rs.{totalPrice.toFixed(2)}</h3>
                    </div>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = state => ({
    cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
    removeFromCart: productId => dispatch({ type: 'REMOVE_FROM_CART', productId }),
    updateQuantity: (productId, quantity) =>
        dispatch({ type: 'UPDATE_QUANTITY', productId, quantity }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
