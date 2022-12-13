import httpService from "./http"
import { toast } from "react-toastify"

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

function getProducts() {
    return new Promise((resolve, reject) => {
        httpService.get('/products/', config)
            .then((response) => {
                resolve({ data: response.data })
            }).catch((error) => {
                reject({ data: error.message })
                toast(`Falha ao obter os produtos: ${error.message}`)
                console.log('getProducts error:')
                console.log(error)
            })

    })
}

function getCategories() {
    return new Promise((resolve, reject) => {
        httpService.get('/categories/', config)
            .then((res) => {
                resolve({ data: res.data })
            }).catch((error) => {
                reject({ data: error.data })
                toast(`Falha ao obter as categorias: ${error.message}`)
                console.log('getCategories error:')
                console.log(error)
            })
    })
}

function getProduct(id) {
    return httpService.get(`/products/${id}`, config)
}

function addProduct(newProduct) {
    return new Promise((resolve, reject) => {
        httpService.post('/products', newProduct, config)
            .then((response) => {
                resolve({ data: response.data })
            }).catch((error) => {
                reject({ data: error.message })
                toast(`Falha ao adicionar produto: ${error.message}`)
                console.log('addProduct error:')
                console.log(error)
            })

    })
}

function deleteProduct(id) {
    return httpService.delete(`/products/${id}`, config)
}

function updateProduct(body) {
    return httpService.put(`/products/${body.id}`, body, config)
}

const productsService = {
    getProducts,
    getCategories,
    getProduct,
    addProduct,
    deleteProduct,
    updateProduct
}

export default productsService