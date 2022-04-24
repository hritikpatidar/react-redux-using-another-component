import { combineReducers } from "redux";
import { A, B,C, D, E, F, G, H } from "../constants/Constants";
import initialState from "../initial State/InitialState";

let reducer1=(oldState=initialState,action)=>{      // initialState are default argument
    let newState = oldState;
    switch(action.type){
      case A:
        newState ={
                  ...oldState,
                  name:"abhishek"
        }
      break;
      case B:
        newState ={
                  ...oldState,
                  name:"kiran"
        }
      break;
      case C:
        newState ={
                  ...oldState,
                  name:"ayushi"
        }
      break;
      case D:
        newState ={
                  ...oldState,
                  name:"avinash"
        }
      break;
      default:
        return newState
    }
  
    return newState;
  }
let reducer2 = (oldState=initialState,action)=>{      // initialState are default argument
    let newState = oldState;
    switch(action.type){
      case E:
        newState ={
                  ...oldState,
                  name:"Anurag"
        }
      break;
      case F:
        newState ={
                  ...oldState,
                  name:"Akhilesh"
        }
      break;
      case G:
        newState ={
                  ...oldState,
                  name:"Vivek"
        }
      break;
      case H:
        newState ={
                  ...oldState,
                  name:"Deepak"
        }
      break;
      default:
        return newState
    }
  
    return newState;
  }
const rootReducer = combineReducers({
    reducer1:reducer1,
    reducer2:reducer2,
})
export default rootReducer;