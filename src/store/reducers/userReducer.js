import { Types } from '../actions/usersConstant'

const INITIAL_STATE = {
	items: [],
}
export default function userReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case Types.GET_USER_SUCCESS: {
			return {
				items: action.payload.items,
			}
		}
		default: {
			return state
		}
	}
}
