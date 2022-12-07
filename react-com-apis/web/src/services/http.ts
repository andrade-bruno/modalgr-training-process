import axios from 'axios'

const http = axios.create({
	baseURL: 'http://localhost:8000/api/v2/',
	timeout: 100000
})

export default http