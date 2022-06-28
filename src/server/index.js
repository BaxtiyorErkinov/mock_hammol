import axios from 'axios'

let baseApi = axios.create({
	baseURL: 'http://localhost:3001/api/',
});

export default baseApi;