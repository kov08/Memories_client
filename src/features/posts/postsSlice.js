// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// // import {  } from "@reduxjs/toolkit";
// import axios from "axios";
// // import{ Posts} from "../components/Posts/Posts.js";

// const initialState = {
//     posts : [],
//     error:''
// }

// // const url = 'http://localhost:5000/posts';

// export const fetch_all = createAsyncThunk('posts/fetch_all', () =>
// {
//     return axios
//         // .get(url)
//         .get('http://localhost:5000/posts')
//         .then((response) => response.data)
// })

// const postsSlice = createSlice({
//     name: 'posts',
//     initialState,
//     extraReducers: builder => {
//         builder.addCase(fetch_all.FETCHALL, (state, action) =>{
//             state.postsSlice = action.payload
//         })

//         builder.addCase(fetch_all.CREATE, (state, action) =>{
//             state.postsSlice = action.payload
//         })
        
//         builder.addCase(fetch_all.ERROR, (state, action) =>{
//             state.error = action.error.message
//         })
//     }
// })


// export default postsSlice.reducer