import {FETCH_WEATHER_DATA} from '../actions/index.js'

export default function(state = [], action)
{
	switch(action.type)
	{
		case FETCH_WEATHER_DATA:
			return [action.payload.data, ...state]
	}
	return state;
}