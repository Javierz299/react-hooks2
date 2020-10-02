import { combineReducers } from 'redux'
import activitiesReducer from './activitiesReducer'
import hooksReducer from './hooksReducer'

const rootReducer = combineReducers({
    activities: activitiesReducer,
    hooks: hooksReducer,
});

export default rootReducer;