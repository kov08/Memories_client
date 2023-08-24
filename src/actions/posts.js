import * as api from '../api';

// Action creators

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        
        dispatch({ type : 'FETCH_ALL', payload : data })
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    // why add post in aove bracket
    try {
        const { data } = await api.createPost(post);
                                // why add post in above bracket 
        dispatch({ typr: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}