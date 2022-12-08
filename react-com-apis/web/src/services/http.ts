import axios from 'axios'

export const httpV2 = axios.create({
	baseURL: 'http://localhost:8000/api/v2/',
	timeout: 100000
})

export const httpV1 = axios.create({
	baseURL: 'http://localhost:8000/api/v1/',
	timeout: 100000
})

export default httpV2