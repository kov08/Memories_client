import React, {useState, useEffect} from 'react';
import {Container, Grow, Grid} from '@mui/material';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import useStyles from '../../styles';

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const classes = useStyles();
    
    useEffect(() => {
      dispatch(getPosts());
    }, [dispatch]);

    // console.log("tHIS WORKS!");
    
  return (
    <Grow in>
        <Container>
            <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                    <Posts setCurrentId2={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
            </Grid>
        </Container>
    </Grow>
  )
}

export default Home


