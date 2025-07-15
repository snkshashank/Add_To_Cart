const initialState = {
    products: [
        { id: 1, name: 'EOS R1 (Body)', Price: 630995.00, image: '/images/img1.png', quantity: 1 },
        { id: 2, name: 'EOS R5 Mark II', Price: 505995.00, image: '/images/img2.png', quantity: 1 },
        { id: 3, name: 'EOS R5 Mark I', Price:  405995.00, image: '/images/img3.png', quantity: 1 },
        { id: 4, name: 'EOS R100 AF', Price: 64995.00, image: '/images/img4.png', quantity: 1 },
        { id: 5, name: 'EOS R50 (Body)', Price: 97995.00, image: '/images/img5.png', quantity: 1 },
        { id: 6, name: 'EOS R8 (Body)', Price: 161995.00, image: '/images/img6.png', quantity: 1 },
    ],
    cart: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingProduct = state.cart.find(item => item.id === action.product.id);
            if (existingProduct) {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.product.id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                };
            } else {
                return { ...state, cart: [...state.cart, { ...action.product, quantity: 1 }] };
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.productId),
            };
        case 'UPDATE_QUANTITY':
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.productId ? { ...item, quantity: action.quantity } : item)
            };
        default:
            return state;
    }
};

export default rootReducer;
