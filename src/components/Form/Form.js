import React, {useState, useEffect} from 'react'
import { TextField , Button, Typography, Paper} from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';
import { useNavigate } from 'react-router-dom';
// import { clear } from '@testing-library/user-event/dist/clear';

const Form = ( {currentId, setCurrentId} ) => {
  // const [postData,setpostData] = useState({creator: '', title: '',  message: '',  tags: '',  selectedFile: ''});
  const [postData,setpostData] = useState({ title: '',  message: '',  tags: '',  selectedFile: ''});
  
  const history = useNavigate();
  
  const post = useSelector((state) => currentId ? state.posts.posts.find((p) => p._id === currentId) : null );
  
  const classes = useStyles();
  
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if(post) setpostData(post);
  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentId) {
      dispatch(updatePost(currentId, {...postData, name: user?.result?.name}));
      clear();     
    } else {
      dispatch(createPost({...postData, name: user?.result?.name}, history));
      clear();
    }
    // clear()
  }

  if(!user?.result?.name) {
    return (
      <paper className={classes.paper}> 
        <Typography variant="h6" align="center" >
          Please Sign In to create your own memories and like other's memories...
        </Typography>
      </paper>
    );
  }
  
  const clear = () => {
    setCurrentId(null)
    // setpostData({ creator: '', title: '',  message: '',  tags: '',  selectedFile: '' });   
    setpostData({ title: '',  message: '',  tags: '',  selectedFile: '' });   
  }
  
  return (
    <Paper className={classes.Paper} elevation={6}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant='h6'>{ currentId ? 'Editing' : 'Creating' }  a Memory</Typography>
        {/* <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setpostData( {...postData, creator: e.target.value})}/> */}
        <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title} onChange={(e) => setpostData( {...postData, title: e.target.value})}/>
        <TextField name="message" variant="outlined" label="message" fullWidth value={postData.message} onChange={(e) => setpostData( {...postData, message: e.target.value})}/>
        <TextField name="tags" variant="outlined" label="tags" fullWidth value={postData.tags} onChange={(e) => setpostData( {...postData, tags: e.target.value.split(',')})}/>
        <div className={classes.fileInput}>
          <FileBase type = "file" multiple={false} onDone={({base64}) => setpostData({...postData, selectedFile: base64})} />          
        </div>
        <div className={classes.fileInput}>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth >Submit</Button>
        </div>
        <div className={classes.fileInput}>
          <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth >Clear</Button>
        </div>
      </form>

    </Paper>
    
    // <div>
    //   <h1>Form</h1>
    // </div>
  )
}

export default Form;

// copy and paste from final memories src components ======================================




// import React from 'react';

// function Form() {
//   return (
//     <div>
//       <h1>Form</h1>
//     </div>
//   )
// }

// export default Form;