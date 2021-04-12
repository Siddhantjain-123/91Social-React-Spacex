import axios from 'axios';

export async function fetchLaunches() {
	try {
		const response = await axios.get('https://api.spacexdata.com/v3/launches');
		return response.data.slice(0, 3);
	} catch (e) {
		console.error(e);
	}
}
export async function fetchMissions() {
	try {
		const response = await axios.get('https://api.spacexdata.com/v3/missions');
		return response.data.slice(0, 3);
	} catch (e) {
		console.error(e);
	}
}
export async function fetchRockets() {
	try {
		const response = await axios.get('https://api.spacexdata.com/v3/rockets');
		return response.data.slice(0, 3);
	} catch (e) {
		console.error(e);
	}
}