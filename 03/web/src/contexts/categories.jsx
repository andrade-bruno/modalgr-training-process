import React from 'react';

import productsService from 'services/productsService';

const CategoriesContext = React.createContext()
CategoriesContext.displayName = 'Categories'

export const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = React.useState([])

    async function getCategories() {
        try {
            const { data } = await productsService.getCategories()
            setCategories(data)
        } catch (error) {
            alert(error?.message)
        }
    }

    React.useEffect(() => {
        getCategories()
    }, [])

    return (
        <CategoriesContext.Provider value={{ categories, setCategories }}>
            {children}
        </CategoriesContext.Provider>
    )
}

export function useCategoriesContext() {
    return React.useContext(CategoriesContext)
}