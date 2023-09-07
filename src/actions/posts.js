import { FETCH_ALL, UPDATE, CREATE, DELETE } from '../constants/actionTypes';
import * as api from '../api';

// Action creators

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        // console.log("Inside getPosts: ", data)
        dispatch({ type : FETCH_ALL, payload : data })
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    // why add post in aove bracket
    try {
        const { data } = await api.createPost(post);
                                // why add post in above bracket 
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updatePost =  (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);        
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

