import baseApi from './';

export const api = {
	getProducts: () => baseApi.get('product/'),
	getProductById: (id) => baseApi.get('product/' + id),
	getCategories: () => baseApi.get('category/'),
	productsFilterByCategory: (category) => baseApi.get(`product?category=skincare`),
	searchProducts: (query) => baseApi.get(`product?name=${query}`)

};