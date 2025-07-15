import React from 'react';
import { connect } from 'react-redux';

const ProductList = ({ products, addToCart }) => {
    const productListStyle = {
        marginBottom: '40px',
        textAlign: 'center',
    };

    const productItemStyle = {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    };

    const productItemHoverStyle = {
        transform: 'scale(0.3)',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    };

    const productTitleStyle = {
        color: '#333',
        fontWeight: '600',
        fontSize: '20px',
        marginBottom: '10px',
    };

    const productPriceStyle = {
        color: '#007bff',
        fontWeight: 'bold',
        fontSize: '1.1em',
        marginBottom: '15px',
    };

    const addToCartButtonStyle = {
        backgroundColor: '#EFB036',
        color: '#fff',
        borderColor: '#28a745',
        borderRadius: '5px',
        padding: '5px 10px',
        fontSize: '14px',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
    };

    const addToCartButtonHoverStyle = {
        backgroundColor: '#218838',
        transform: 'translateY(-2px)',
    };

    return (
        <div style={productListStyle}>
            <h2 style={{ fontWeight: 'bold', marginBottom: '30px' }}>Our Products</h2>
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-md-4 mb-3">
                        <div 
                            className="card" 
                            style={productItemStyle} 
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <img 
                                src={product.image} 
                                alt={product.name} 
                                className="card-img-top" 
                                style={{ borderRadius: '5px' }} 
                            />
                            <div className="card-body">
                                <h5 className="card-title" style={productTitleStyle}>
                                    {product.name}
                                </h5>
                                <p className="card-text" style={productPriceStyle}>
                                    MRP Rs.{product.Price}
                                </p>
                                <button
                                    className="btn"
                                    style={addToCartButtonStyle}
                                    onClick={() => addToCart(product)}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#218838'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#28a745'}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
    addToCart: (product) => dispatch({ type: 'ADD_TO_CART', product }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
