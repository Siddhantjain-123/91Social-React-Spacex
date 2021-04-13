import { fetchRockets } from './server';
import { ROCKET_DATA_FETCHED } from '../constants';

export const rocketDataFetched = (payload) => ({
	type: ROCKET_DATA_FETCHED,
	payload
});

export const getRockets = () => async (dispatch) => {

	try {
		const response = await fetchRockets();
		const rockets = response.data.slice(0, 3);

		dispatch(rocketDataFetched(rockets));
	} catch(e) {
		console.error(e);
	}
	
}