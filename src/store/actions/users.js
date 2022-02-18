import { Types } from './usersConstant'

export const getUserRequest = () => ({
	type: Types.GET_USER_REQUEST,
})
export const getUserSuccess = ({ items }) => ({
	type: Types.GET_USER_SUCCESS,
	payload: { items },
})
