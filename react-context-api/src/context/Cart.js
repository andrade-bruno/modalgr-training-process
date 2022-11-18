import React from 'react'

export const CartContext = React.createContext()
CartContext.displayName = 'Cart'

export const CartProvider = ({ children }) => {
    const [cart, setCart] = React.useState([])

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    const { cart, setCart } = React.useContext(CartContext)

    function addProduct(newProduct) {
        const hasProduct = cart.some(item => item.id === newProduct.id)

        if (!hasProduct) {
            newProduct.quantity = 1;
            return setCart(prevCart => [...prevCart, newProduct])
        }

        setCart(handleQuantity(newProduct.id, 1))
    }

    function removeProduct(id) {
        const product = cart.find(item => item.id === id)

        if (!product) return null;

        const isLastOne = product.quantity === 1;

        if (isLastOne) return setCart(previous => previous.filter(item => item.id !== id))

        setCart(handleQuantity(id, -1))
    }

    function handleQuantity(id, quantity) {
        return cart => cart.map(item => {
            if (item.id === id) item.quantity += quantity;
            return item
        })
    }

    return { cart, setCart, addProduct, removeProduct }
}