import { FETCH_POST, START_LOADING, END_LOADING, FETCH_BY_SEARCH, FETCH_ALL, UPDATE, CREATE, DELETE, COMMENT } from '../constants/actionTypes';
import * as api from '../api';

// Action creators

export const getPost = (id) => async (dispatch) => {
    try {
        dispatch({ type : START_LOADING });
        const { data } = await api.fetchPost(id);
        // console.log(data);
        
        dispatch({ type : FETCH_POST, payload : data })
        dispatch({ type : END_LOADING });
    } catch (error) {
        console.log(error);
    }
}

export const getPosts = (page) => async (dispatch) => {
    try {
        dispatch({ type : START_LOADING });
        const { data: {data, currentPage, numberOfPages }} = await api.fetchPosts(page);
        // console.log(data);
        
        dispatch({ type : FETCH_ALL, payload : { data, currentPage, numberOfPages} })
        dispatch({ type : END_LOADING });
    } catch (error) {
        console.log(error);
    }
}

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type : START_LOADING });
        const { data: {data} } = await api.fetchPostsBySearch(searchQuery);
                // Why data:{data } above give result instead of only data single time
        dispatch({ type : FETCH_BY_SEARCH, payload : data })
        dispatch({ type : END_LOADING });
        // console.log("getPostsBySearch :", data);
    } catch (error) {
        console.log(error);
    }
}


export const createPost = (post, history) => async (dispatch) => {
    // why add post in aove bracket
    try {
        dispatch({ type : START_LOADING });
        const { data } = await api.createPost(post);
                                // why add post in above bracket 
        history(`/posts/${data.id}`);
        dispatch({ type: CREATE, payload: data });
        dispatch({ type : END_LOADING });
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

export const commentPost = (value, id) => async (dispatch) => {

    try {
        const {data} = await api.comment(value, id);
        
        // console.log("MY COMMENT: ",data);
        dispatch({ type: COMMENT, payload: data });
        return data.comments;   
    } catch (error) {
        console.log(error);    
    }
}

