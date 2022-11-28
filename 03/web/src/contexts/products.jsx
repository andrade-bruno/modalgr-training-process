import React from 'react';

import { toast } from 'react-toastify';
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
        }
    }

    async function addProduct(newProduct) {
        newProduct.price = parseFloat(newProduct.price)
        newProduct.categoryId = parseInt(newProduct.categoryId)

        await productsService.addProduct(newProduct)
        newProduct.id = products.length + 1
        setProducts([...products, newProduct])
        toast(`${newProduct.title} adicionado com sucesso`)
        return newProduct
    }

    async function deleteProduct(id) {
        await productsService.deleteProduct(id)
        setProducts(products.filter(product => product.id !== id))
    }

    async function updateProduct(updatedProduct) {
        updatedProduct.price = parseFloat(updatedProduct.price)
        updatedProduct.categoryId = parseInt(updatedProduct.categoryId)

        await productsService.updateProduct(updatedProduct)
        let filtered = products.filter(product => product.id !== updatedProduct.id)
        setProducts([...filtered, updatedProduct])
        return updatedProduct
    }

    React.useEffect(() => {
        getProducts()
    }, [])

    return (
        <ProductsContext.Provider value={{ products, setProducts, addProduct, deleteProduct, updateProduct }}>
            {children}
        </ProductsContext.Provider>
    )
}

export function useProductsContext() {
    return React.useContext(ProductsContext)
}