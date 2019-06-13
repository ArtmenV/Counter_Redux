import { INCREMENT } from "../constants";
import {DECREMENT} from '../constants'

const counter = (counterState = 0, action) => {
  switch (action.type) {
    
    case INCREMENT : 
     return INCREMENT ? counterState + 1 : counterState;

     case DECREMENT :
        return INCREMENT ? counterState - 1 : counterState;
        
        default:
            return counterState
  }
};

export default counter
