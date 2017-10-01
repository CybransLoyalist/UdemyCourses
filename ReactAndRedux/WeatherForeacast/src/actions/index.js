import axios from 'axios';

const API_KEY = 'cfa2a902a2db0c208dcfe91c49bd9b9f';
const URL_ROOT = `http://api.openweathermap.org/data/2.5/forecast?appId=${API_KEY}`;

export const FETCH_WEATHER_DATA = 'FETCH_WEATHER_DATA';

export function fetchWeatherData(city)
{
	var url = `${URL_ROOT}&q=${city},us`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER_DATA,
		payload: request
	}
}