// import React, {useEffect} from 'react'
import React, { useEffect } from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux'
// import useStyles from './styles'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetch_all } from './postsSlice'


const Posts = () => {
  const posts = useSelector((state) => state.posts);
  // const classes = useStyles()

  console.log(posts);

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetch_all())
  // }, [])

  return (

    <>
    <div>
      <h1>
        POSTS
      </h1>
    </div>
    {/* {posts.FETCHALL && ({posts.Posts.map((posts) => (
    <li key={posts}>{posts}</li>
    ))})} */}
    
    <Post/>
    <Post/>
    </> 
  )
}

export default Posts;