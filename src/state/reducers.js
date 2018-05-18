import { combineReducers } from 'redux';
import peopleReducer from './modules/people';

// TODO what's this for?
const rehydrated = (state = false, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return true;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  people: peopleReducer,
  rehydrated,
});

export default rootReducer;
