import { GET_PRODUCTS } from '../action-types/'

const inititalState = {
	products: [],
	loading: false,
	error: null
}

export const productsReducer = (state = inititalState, action) => {
	switch(action.type) {
		case GET_PRODUCTS:
			return {
				...state,
				products: action.payload,
				loading: false,
				error: null
			}
		default: 
			return state
	}
}