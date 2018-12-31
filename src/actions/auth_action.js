import React from 'react';
import { userConstant } from '../action_constants';
import axios from 'axios';
import { env } from '../helpers';


export const signup = (args) => async dispatch => {
	const url = `${env.apiUrl}/api/signup`;
	const registrationData = await axios.post(url, args)
	
	dispatch({
		type: userConstant.SIGNUP,
		payload: registrationData
	})
}