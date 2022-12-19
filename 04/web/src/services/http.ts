import axios from 'axios'

export const instance = axios.create({
	baseURL: 'http://localhost:8000/',
	timeout: 10000,
	headers: {
		post: {
			setContentType: 'application/json'
		}
	}
})

export const http = {
	get: instance.get,
	post: instance.post,
	put: instance.put,
	patch: instance.patch,
	delete: instance.delete,
}

export default http