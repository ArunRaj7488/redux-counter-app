import { ADD_ONE, MINUS_ONE } from './actions';
const initialState = {
  number: 0
};
function reducer(state = initialState, action) {
switch(action.type) {
  case ADD_ONE:
    return {
      number: state.number + 1
    };
  case MINUS_ONE:
      if(state.number > 0 ){
        return {
            number: state.number - 1
          };
      }else{
         alert("number can't be less than zero!!!")
        return {
            number: state.number 
          };
      }
    
  default:
    return state;
  }
}
export default reducer;