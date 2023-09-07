import React from 'react'
// import React, { useEffect } from 'react'
import { Grid, CircularProgress } from '@material-ui/core'

import Post from './Post/Post'
import { useSelector } from 'react-redux'
import useStyles from './styles'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetch_all } from './postsSlice'


const Posts = ({ setCurrentId2 }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles()

  // console.log(posts);

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetch_all())
  // }, [])

  return (

    !posts.length ? <CircularProgress /> :(
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} >
            <Post post={post} setCurrentId3={ setCurrentId2 }/>
          </Grid>
        ))}
      </Grid>
    ) 
  )
}

export default Posts;