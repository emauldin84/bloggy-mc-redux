import { combineReducers, createStore } from 'redux';

import posts from './reducers/posts';

// Pass an object to combinedReducers
// This object should be shaped like your state
const rootReducer = combineReducers({
    posts,
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
export default store;