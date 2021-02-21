import {FETCH_USER} from '../actions/types'
import {FETCH_SURVEY} from '../actions/types'
export default function(state={},action){

    switch(action.type){
        case FETCH_USER:
            return action.payload || false;
         case FETCH_SURVEY:
            return action.payload ;
        default:
            return state;
    }
}