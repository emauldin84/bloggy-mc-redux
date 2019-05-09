import { ACTION_CREATE_POST } from '../actions'
import { generateId } from '../utils'
// A reducer is a function that accepts the current state and an action. Then, calculates and returns the nest new version of state
export default function posts(state={}, action={type: ''}) {
    switch(action.type) {
        case ACTION_CREATE_POST:
            // create a post
            // console.log(`You called create a post`)
            const id = generateId()
            console.log('New id:', id)
            const newState = {
                ...state,
                // to use a variable as a key in an object literal wrap the variable in square brackets
                [id]: action.payload
                
            }
            // To get the equivalent result, you can use the familiar assigment syntax:
            // newState[id]
            return newState;
        break;
        
        default:
            return state
        break;
    }

}