import httpService from "./http"

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
                console.log('getCategories error:')
                console.log(error)
            })
    })
}

const productsService = {
    getProducts,
    getCategories
}

export default productsService