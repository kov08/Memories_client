import React, {useState} from 'react'
import { TextField , Button, Typography, Paper} from '@mui/material';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { clear } from '@testing-library/user-event/dist/clear';

const Form = () => {
  const [postData,setpostData] = useState({
    creator: '', title: '',  message: '',  tags: '',  selectedFile: ''})
  const classes = useStyles();

  const handleSubmit = () => {

  }
  const clear = () => {
    
  }

  return (
    <Paper className={classes.Paper}>
      <form autoComplete='off' noValidate className='classes.form' onSubmit={handleSubmit}>
      <Typography variant='h6'>Creating a Memory</Typography>
      <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setpostData( {...postData, creator: e.target.value})}/>
      <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title} onChange={(e) => setpostData( {...postData, title: e.target.value})}/>
      <TextField name="message" variant="outlined" label="message" fullWidth value={postData.message} onChange={(e) => setpostData( {...postData, message: e.target.value})}/>
      <TextField name="tags" variant="outlined" label="tags" fullWidth value={postData.tags} onChange={(e) => setpostData( {...postData, tags: e.target.value})}/>
      <div className={classes.fileInput}>
        <FileBase type = "file" multiple={false} onDone={({base64}) => setpostData({...postData, selectedFile: base64})} />              
      </div>

      <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
      <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      

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