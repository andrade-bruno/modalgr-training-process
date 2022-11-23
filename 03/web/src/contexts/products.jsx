import React from 'react';

import productsService from 'services/productsService';

const ProductsContext = React.createContext()
ProductsContext.displayName = 'Products'

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = React.useState([])

    async function getProducts() {
        try {
            const { data } = await productsService.getProducts()
            setProducts(data)
        } catch (error) {
            alert(error?.message)
        }
    }

    React.useEffect(() => {
        getProducts()
    }, [])

    return (
        <ProductsContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductsContext.Provider>
    )
}

export function useProductsContext() {
    return React.useContext(ProductsContext)
}