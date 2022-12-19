import axios from 'axios'

export const instance = axios.create({
	baseURL: 'http://localhost:8000/',
	timeout: 10000,
})

instance.defaults.headers.post['Content-Type'] = 'application/json'
instance.defaults.headers.common['Accept'] = 'application/json'

export function getJwt() {
	try {
		return localStorage.getItem('token')
	} catch (error) {
		return undefined
	}
}

export const http = {
	get: instance.get,
	post: instance.post,
	put: instance.put,
	patch: instance.patch,
	delete: instance.delete,
	getJwt: () => getJwt()
}

export default http