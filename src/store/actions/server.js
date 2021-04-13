import axios from 'axios';
import React from 'react';

export const fetchLaunches = () => axios.get('https://api.spacexdata.com/v3/launches');

export const fetchMissions = () => axios.get('https://api.spacexdata.com/v3/missions');

export const fetchRockets = () => axios.get('https://api.spacexdata.com/v3/rockets');

export const loginRequest = (body) => axios.post(
	"https://run.mocky.io/v3/d94ba067-e06e-419c-8b2b-3e0eb9149215",
	{
		config: {},
		headers: {},
		body,
	}
);