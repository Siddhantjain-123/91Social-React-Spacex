import { fetchMissions } from './server';
import { MISSION_DATA_FETCHED } from '../constants';

export const missionDataFetched = (payload) => ({
	type: MISSION_DATA_FETCHED,
	payload
});

export const getMissions = () => async (dispatch) => {

	try {
		const response = await fetchMissions();
		const missions = response.data.slice(0, 3);
		console.log(missions);
		dispatch(missionDataFetched(missions));
	} catch(e) {
		console.error(e);
	}
	
}