import { FETCH_BY_SEARCH, FETCH_POST, FETCH_ALL, UPDATE, CREATE, DELETE, START_LOADING, END_LOADING, COMMENT } from '../constants/actionTypes';

export default (state = {isLoading: true, posts: []}, action) => {
    switch (action.type) {
            
        case START_LOADING:
            return {...state, isLoading: true};
        
        case END_LOADING:
            return {...state, isLoading: false};

        case DELETE:
            return {...state, posts: state.posts.filter((post) => post._id !== action.payload )};
            // I have some doubt in _id and id usage in appliication

        case UPDATE:
        // case LIKE:
            return {...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post))};

        case FETCH_ALL:
            return {
                ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };

        case FETCH_POST:
            return { ...state, post: action.payload };

        case FETCH_BY_SEARCH:
            return { ...state, posts: action.payload };
            // return action.payload;
            
        case CREATE:
            return [...state, action.payload];
        
        case COMMENT:
            return{
                ...state,
                posts: state.posts.map((post) => {
                    if(post._id === action.payload._id) 
                    return action.payload;
                
                    return post;
                }),
            };
            
        default:
            return state;
    }

}

