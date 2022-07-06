import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    if (existingCartItem) {
        // return [...cartItems, {...productToAdd, quantity: existingCartItem.quantity++}]
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        );
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const reduceCartQuantity = (cartItems, productId) => {
    return cartItems.map(cartItem => cartItem.id === productId && cartItem.quantity > 1 ?
        {...cartItem, quantity: cartItem.quantity -1}
        : cartItem)
}

const removeItemFromCart = (cartItems, productId) => {
    return cartItems.filter(cartItem => cartItem.id !== productId)
}

export const CartContext = createContext({
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
    setIsCartOpen: () => {},
    addItemToCart: () => {},
    reduceQuantity: () => {},
    deleteItemFromCart: () => {},
});

export const CartProvider = ({children}) => {
    const [ isCartOpen, setIsCartOpen ] = useState(false);
    const [ cartItems, setCartItems ] = useState([]);
    const [ cartCount, setCartCount ] = useState(0);
    const [ cartTotal, setCartTotal ] = useState(0)

    useEffect(() => {
      const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
      setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        const newTotalPrice = cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);
        setCartTotal(newTotalPrice);
      }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const reduceQuantity = (productId) => {
        setCartItems(reduceCartQuantity(cartItems, productId));
    }
    const deleteItemFromCart = (productId) => {
        setCartItems(removeItemFromCart(cartItems, productId));
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, reduceQuantity, deleteItemFromCart, cartTotal };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

