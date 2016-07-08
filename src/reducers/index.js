import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

import proyects from './proyects';

export default combineReducers({
	proyects,
	router
});
