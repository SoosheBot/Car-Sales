import { combineReducers } from 'redux';

import { addedFeaturesReducer } from './addedFeaturesReducer';
import { additionalFeaturesReducer } from './additionalFeaturesReducer';

export default combineReducers({
    addedFeaturesReducer, additionalFeaturesReducer
});