import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	userLoginReducer,
	userRegisterReducer,
	userDetailsReducer,
	userUpdateProfileReducer,
	userListReducer,
	userDeleteReducer,
	userUpdateReducer,
	userAddToFavoriteReducer,
	userRemoveFavoriteReducer,
	userGetFavoritesReducer,
} from './reducers/user-reducers';
import {
	productListReducer,
	productDetailsReducer,
	productDeleteReducer,
	productADDReducer,
	productUpdateReducer,
	productReviewADDReducer,
	productTopRatedReducer,
} from './reducers/product-reducers';

const reducer = combineReducers({

	productList: productListReducer,
	productDetails: productDetailsReducer,
	productDelete: productDeleteReducer,
	productADD: productADDReducer,
	productUpdate: productUpdateReducer,
	productReviewADD: productReviewADDReducer,
	productTopRated: productTopRatedReducer,
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,
	userList: userListReducer,
	userDelete: userDeleteReducer,
	userUpdate: userUpdateReducer,
	userAddFavorites: userAddToFavoriteReducer,
	userRemoveFavorite: userRemoveFavoriteReducer,
	userGetFavorites: userGetFavoritesReducer,
	userInfo: JSON.parse(localStorage.getItem('userInfo')),
	role: JSON.parse(localStorage.getItem('role')),
});


// get user info from localStorage if exists
const userInfoFromStorage = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo'))
	: null;



const initialState = {

	userLogin: {
		userInfo: userInfoFromStorage,
	},
};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
