import { ACTION_CREATE_POST, ACTION_DELETE_POST, ACTION_UPDATE_POST } from '../actions'
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
        case ACTION_DELETE_POST:
            const deleteState = {
                ...state
            }
            delete deleteState[action.payload.id];
            return deleteState
        break;
        case ACTION_UPDATE_POST:
            const postToUpdate = state[action.payload.id];
            if(postToUpdate) {
                return {
                    ...state,
                    [action.payload.id]: {
                        title: action.payload.title || postToUpdate.title,
                        content: action.payload.content || postToUpdate.content,
                    }
                }
            } else {
                // no post to update!
                return state
            }
        break;
        default:
            return state
        break;
    }

}