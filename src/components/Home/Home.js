import React, {useState, useEffect} from 'react';
import {Container, Grow, Grid} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import { getPosts, getPostsBySearch } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
// import useStyles from '../../styles';
import useStyles from './styles';
import { Paper, AppBar, TextField, Button } from '@material-ui/core';
import Pagination from '../Pagination/Pagination';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([ ]);
    const [currentId, setCurrentId] = useState(null);
    
    const dispatch = useDispatch();
    const history = useNavigate();
    const classes = useStyles();
    const query = useQuery();
    
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    
    // useEffect(() => {
    //   dispatch(getPosts());
    // }, [currentId, dispatch]);

    const searchPost = () => {
      if(search.trim() || tags) {
        dispatch(getPostsBySearch({search, tags: tags.join(',') }));
        // console.log(getPostsBySearch);
        history(`/posts/search?.searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
      } else{        
        history('/');
      }
    };

    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        searchPost();
      }
    }

    const handleAdd = (tag) => {
      setTags([...tags, tag]);
    }

    const handleDelete = (tagToDelete) => {
      setTags(tags.filter((tag) => tag !== tagToDelete));
    }
    

    // console.log("tHIS WORKS!");
    
  return (
    <Grow in>
        <Container maxWidth="xl">
            <Grid className={classes.gridContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7} md={9}>
                    <Posts setCurrentId2={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <AppBar className={classes.appBarSearch} position="static" color="inherit">
                    <TextField 
                        name="search"
                        variant="outlined"
                        label= "Search Memories"
                        fullWidth
                        value={search}
                        key={handleKeyPress}
                        onChange={((e) => setSearch(e.target.value))}
                    />
                    <ChipInput 
                        style = {{margin: "10px 0"}}
                        value={tags}
                        onAdd={handleAdd}
                        onDelete = {handleDelete}
                        label="Search Tags"
                        variant="outlined"
                    />
                    <Button onClick={searchPost} variant='contained' className={classes.searchButton} color='primary' >Search</Button>
                  </AppBar>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                  {( !searchQuery && !tags.length) && (
                    <Paper elevation={6} className={classes.Pagination}>
                      <Pagination page={page} />
                    </Paper>
                  )}
                </Grid>
            </Grid>
        </Container>
    </Grow>
  )
}

export default Home


