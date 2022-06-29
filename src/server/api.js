import baseApi from './';

export const api = {
	getProducts: () => baseApi.get('product/'),
	getProductById: (id) => baseApi.get('product/' + id),
	getCategories: () => baseApi.get('category/'),
	productsFilterByCategory: (category) => baseApi.get(`product?category=${category}`),
	searchProducts: (query) => baseApi.get(`product?name=${query}`),
	searchWithExactCategory: (query, category) => baseApi.get(`product?name=${query}&category=${category}`),
	getProductsWithPagination: (limit, offset) => baseApi.get(`product?limit=${limit}&offset=${offset}`)
};