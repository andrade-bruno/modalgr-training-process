import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 10000,
});

const httpService = {
    get: instance.get,
    post: instance.post,
    put: instance.put,
    patch: instance.patch,
    delete: instance.delete,
};

export default httpService