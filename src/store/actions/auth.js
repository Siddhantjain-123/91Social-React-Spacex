import { loginRequest } from './server';
import { push } from 'react-router-redux';
import * as constants from '../constants';

export const loginSuccessful = (payload) => ({
	type: constants.LOGIN_SUCCESS,
	payload
})

export const authenticateUser = (body) => async (dispatch) => {
	
	try {
		console.log("authenticate")
		const response = await loginRequest(body);
		console.log(response);
		response.data.isAdmin = response.data.username === 'elon' ? true : false;
		
		if (response.status === 200) {
			dispatch(loginSuccessful(response.data));
			push('/dashboard')
		}
	} catch(e) {
		console.error(e);
	}
	
}

export const logout = () => ({
	type: constants.LOGOUT
})