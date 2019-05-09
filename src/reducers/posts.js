import { ACTION_CREATE_POST } from '../actions'
// A reducer is a function that accepts the current state and an action. Then, calculates and returns the nest new version of state
export function posts(state={}, action={type: ''}) {
    switch(action.type) {
        case ACTION_CREATE_POST:
        // create a post
            console.log(`You called create a post`)
        break;
        
        default:
            return state
        break;
    }

}