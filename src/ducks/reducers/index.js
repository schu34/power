import {TICK} from '../actionTypes';

initialState = {

}

export default (oldState= initialState, action)=>{
  switch(action.type){
    case TICK:
      return computeNextState({...oldState});
    default:
      return oldState;
  }
}