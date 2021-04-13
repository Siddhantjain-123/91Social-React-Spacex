import { fetchLaunches } from './server';
import { LAUNCH_DATA_FETCHED } from '../constants';

export const launchDataFetched = (payload) => ({
	type: LAUNCH_DATA_FETCHED,
	payload
});

export const getLaunches = () => async (dispatch) => {

	try {
		const response = await fetchLaunches();
		const launches = response.data.slice(0, 3);

		dispatch(launchDataFetched(launches));
	} catch(e) {
		console.error(e);
	}
	
}