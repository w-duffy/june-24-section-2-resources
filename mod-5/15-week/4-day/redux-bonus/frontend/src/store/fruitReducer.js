const initialState = [{ 1: 'banana', 2: 'pear', 3: 'orange', 4: 'peach' }];
import { LOAD_ARTICLES } from "./articleReducer";
const fruitReducer = (state = initialState, action) => {
  switch(action.type) {

    case LOAD_ARTICLES:
      // console.log("HERE")
      return state
      default:
      return state;
    }
};

export default fruitReducer;
