import React from 'react'

export const PaymentContext = React.createContext()
PaymentContext.displayName = 'Payment'

export const PaymentProvider = ({ children }) => {
    const paymentTypes = [
        {
            id: 1,
            name: 'Boleto',
            fee: 1
        },
        {
            id: 2,
            name: 'Cartão de Crédito',
            fee: 1.3
        },
        {
            id: 3,
            name: 'Cartão de Débito',
            fee: 1
        },
        {
            id: 4,
            name: 'Crediário',
            fee: 1.5
        }
    ]

    const [paymentMethod, setPaymentMethod] = React.useState(paymentTypes[0])

    return (
        <PaymentContext.Provider value={{ paymentTypes, paymentMethod, setPaymentMethod }}>
            {children}
        </PaymentContext.Provider>
    )
}

export const usePaymentContext = () => {
    const { paymentTypes, paymentMethod, setPaymentMethod } = React.useContext(PaymentContext)

    function handlePaymentMethod(id) {
        const selectedMethod = paymentTypes.find(item => item.id === id)

        setPaymentMethod(selectedMethod)
    }

    return { paymentTypes, paymentMethod, handlePaymentMethod }
}