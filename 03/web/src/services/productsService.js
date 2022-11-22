import httpService from "./http"

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

function getProducts() {
    return httpService.get('/products/', config)
        .then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log('getProducts error:')
            console.log(error)
        })
}

const productsService = {
    getProducts
}

export default productsService