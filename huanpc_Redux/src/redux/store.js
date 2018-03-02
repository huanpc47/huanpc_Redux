import { createStore } from 'redux';
import reducer from './reducers/reducer';
  
//create Store
const store = createStore(reducer);

//Provider -> 1 component -> 1 prop ->store 
export default store;