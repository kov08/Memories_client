import { legacy_createStore as createStore , combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import posts from '../reducers/posts';
import auth from '../reducers/auth';


const rootReducer = combineReducers({ posts, auth });

export  const store = createStore(rootReducer, compose(applyMiddleware(thunk)));






// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// import postsReducer from './features/posts/postsSlice';  
// Confused due to above line as postsReducer is not defined anywhere and imported!!!

// import postsAction from '../features/posts/postsSlice.js'

// import thunk from 'redux-thunk';
// export default store


// ----------------------------------------------------------------------------------------------------------------
// import {configureStore} from '@reduxjs/toolkit';
// import postsSlice from './features/posts/postsSlice';  

// export const store = configureStore({
//   reducer: {
//     posts: postsSlice
//   },
// })
