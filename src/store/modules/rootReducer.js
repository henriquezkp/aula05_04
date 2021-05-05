import { combineReducers } from 'redux';

import incomeIn from './income-in/reducer';
import incomeOut from './income-out/reducer';
import showAlert from './alert/reducer';

export default combineReducers({
  incomeIn,
  incomeOut,
  showAlert,
});
