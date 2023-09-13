import React from 'react';
// import React, { useEffect } from 'react'
import { Grid, CircularProgress } from '@material-ui/core'

import Post from './Post/Post'
import { useSelector } from 'react-redux'
import useStyles from './styles'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetch_all } from './postsSlice'


const Posts = ({ setCurrentId2 }) => {
  const {posts, isLoading}  = useSelector((state) => state.posts);
  const classes = useStyles();
  
  console.log(posts);

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetch_all())
  // }, [])

  if(!posts.length && !isLoading) return 'No posts';

  return (

    // isLoading ? <CircularProgress /> :(
    !posts?.length ? <CircularProgress /> :(
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {/* console.log(posts); */}
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={6} lg={3} >
            <Post post={post} setCurrentId3={ setCurrentId2 }/>
          </Grid>
        ))}
      </Grid>
    ) 
  )
}

export default Posts;