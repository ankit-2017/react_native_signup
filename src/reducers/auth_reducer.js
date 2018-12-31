import { userConstant } from '../action_constants';

let userInitialState = {
	registration: []
}

export const Registration = (state = userInitialState, action) => {
	switch (action.type) {
		case userConstant.SIGNUP:

			return {
				...state,
				signupData: action.payload
			}
			break;
		
		default:
			return state;
	}
}