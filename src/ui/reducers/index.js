import { combineReducers } from 'redux';
import widgets from './widgets';
import products from './products';

const appReducer = combineReducers({
  widgets,
  products
});

export default appReducer
