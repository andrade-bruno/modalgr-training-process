import axios from 'axios'

export const instance = axios.create({
	baseURL: 'http://192.168.10.80:3000/',
	timeout: 10000,
})

instance.defaults.headers.post['Content-Type'] = 'application/json'
instance.defaults.headers.common['Accept'] = 'application/json'

export const http = {
	get: instance.get,
	post: instance.post,
	put: instance.put,
	patch: instance.patch,
	delete: instance.delete
}

export default http