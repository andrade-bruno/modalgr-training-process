import React from 'react'
import { usePaymentContext } from './Payment';
import { UserContext } from 'context/User';

export const CartContext = React.createContext()
CartContext.displayName = 'Cart'

export const CartProvider = ({ children }) => {
    const [cart, setCart] = React.useState([])
    const [productsAmount, setProductsAmount] = React.useState(0)
    const [totalPrice, setTotalPrice] = React.useState(0)

    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            productsAmount,
            setProductsAmount,
            totalPrice,
            setTotalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    const {
        cart,
        setCart,
        productsAmount,
        setProductsAmount,
        totalPrice,
        setTotalPrice
    } = React.useContext(CartContext)

    const {
        paymentMethod
    } = usePaymentContext()

    const {
        setBalance
    } = React.useContext(UserContext)

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

    function finishPayment() {
        setCart([])
        setBalance(previous => previous - totalPrice)
    }

    React.useEffect(() => {
        const { newQtd, newTotalPrice } = cart.reduce((counter, product) => ({
            newQtd: counter.newQtd + product.quantity,
            newTotalPrice: counter.newTotalPrice + (product.quantity * product.price)
        }), {
            newQtd: 0,
            newTotalPrice: 0
        })
        setProductsAmount(newQtd)
        setTotalPrice(newTotalPrice * paymentMethod.fee)
    }, [cart, setProductsAmount, setTotalPrice, paymentMethod])

    return { cart, setCart, addProduct, removeProduct, productsAmount, totalPrice, finishPayment }
}